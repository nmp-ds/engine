import { parseArgs } from 'node:util';
import { createGenerator } from '@unocss/core';
import { presetWarp } from '#plugin';


const {
  values: { cliClasses, ...options },
} = parseArgs({
  options: {
    cliClasses: {
      type: 'string',
      short: 'c',
    },
    externalClasses: {
      type: 'string',
    },
    externalizeClasses: {
      type: 'boolean',
    },
    usePixels: {
      type: 'boolean',
    },
    omitComponentClasses: {
      type: 'boolean',
    },
    skipResets: {
      type: 'boolean',
    },
  },
});

const uno = createGenerator({ presets: [presetWarp( { ...options, development: true } )] });
const devClasses = ['m-16!', 'opacity-50'];
const classes = cliClasses ?? devClasses;
const result = await uno.generate(classes);
console.log(result.css);
