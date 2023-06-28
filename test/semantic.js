import { setup } from './_helpers.js';
import { expect, test } from 'vitest';

setup();

test('it generates css based on semantic warp tokens', async ({ uno }) => {
  const classes = [
    's-bg',
    's-bg-positive-active-hover',
    's-text',
    's-text-link-active',
    's-border',
    's-border-l',
    's-border-r',
    's-border-t',
    's-border-b',
    's-border-x',
    's-border-y',
    's-border-l-disabled',
    's-border-r-primary-active-hover',
    's-border-t-positive',
    's-border-b-negative-hover',
    's-border-x-warning-active',
    's-border-y-info-subtle-active-hover',
    's-icon',
    's-icon-hover',
    's-icon-active',
    's-icon-active-hover',
    's-icon-disabled',
    's-icon-subtle',
    's-icon-subtle-hover',
    's-icon-subtle-active',
    's-icon-subtle-active-hover',
    's-icon-inverted',
    's-icon-primary',
    's-icon-positive',
    's-icon-negative',
    's-icon-warning',
    's-icon-info',
  ];
  const antiClasses = [
    's-background',
    's-background-positive-active-hover',
    's-font',
    's-font-link-active',
    's-bordercolor',
    's-bordercolor-l-disabled',
  ];
  const { css } = await uno.generate([...classes, ...antiClasses]);
  expect(css).toMatchSnapshot();
});
