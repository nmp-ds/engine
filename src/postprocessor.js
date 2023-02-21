import { escapeSelector } from '@unocss/core';

const prefix = 'w-';
const classify = (str) => `.${escapeSelector(str)}`;

export const postprocess = (shouldExternalize, _externalClasses = []) => {
  const externalClasses = _externalClasses.map(classify);
  return (obj) => {
    if (shouldExternalize && externalClasses.includes(obj.selector)) return obj.entries = null;
    obj.entries.forEach(e => {
      e[0] = e[0].replace(/^--un-/, `--${prefix}`);
      if (typeof e[1] === "string") e[1] = e[1].replace(/var\(--un-/g, `var(--${prefix}`);
    });
  };
};
