import { textMap, lineHeightMap } from '#utils';

export const typography = [
  [/^text-(12|14|16|20|22|28|34|48)$/, ([, d]) => ({ 'font-size': `var(--w-font-size-${textMap[d]})`, 'line-height': `var(--w-line-height-${textMap[d]})` })],
  [/^text-(xs|s|m|ml|l|xl|xxl|xxxl)$/, ([, size]) =>
    ({ 'font-size': `var(--w-font-size-${size})`, 'line-height': `var(--w-line-height-${size})` }),
  ],
  [/^leading-(16|18|22|26|28|34|41|56)$/, ([, d]) => ({ 'line-height': `var(--w-line-height-${lineHeightMap[d]})` })],
  [/^leading-(xs|s|m|ml|l|xl|xxl|xxxl)$/, ([, size]) =>
    ({ 'line-height': `var(--w-line-height-${size})` }),
  ],
];
