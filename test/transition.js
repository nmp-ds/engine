import { setup } from './_helpers.js';
import { expect, test } from 'vitest';
import { durationBase } from '#theme';

setup();

test('transition', async ({ uno }) => {
  const classes = ['none', 'all', 'colors', 'opacity', 'shadow', 'transform'].map(e => `transition-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('duration', async ({ uno }) => {
  const classes = durationBase.map(e => `duration-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('delay', async ({ uno }) => {
  const classes = durationBase.map(e => `delay-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('ease', async ({ uno }) => {
  const classes = ['linear', 'in', 'out', 'in-out'].map(e => `ease-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
