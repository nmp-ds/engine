import { setup } from "./_helpers.js";
import { describe, expect, test } from "vitest";

setup();

describe("border", () => {
  test("supports x|y with value", async (t) => {
    const x = ["border-x-0", "border-x-2", "border-x-4", "border-x-8"];
    const y = ["border-y-0", "border-y-2", "border-y-4", "border-y-8"];

    const classes = [...x, ...y];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test("supports setting border width", async (t) => {
    const classes = ["border", "border-0", "border-2", "border-4", "border-8"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test("supports setting border style", async (t) => {
    const classes = [
      "border-solid",
      "border-dashed",
      "border-dotted",
      "border-double",
      "border-hidden",
      "border-none",
      "border-groove",
      "border-ridge",
      "border-inset",
      "border-outset",
    ];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test("right, left, top bottom", async (t) => {
    const right = [
      "border-r",
      "border-r-0",
      "border-r-2",
      "border-r-4",
      "border-r-8",
    ];

    const left = [
      "border-l",
      "border-l-0",
      "border-l-2",
      "border-l-4",
      "border-l-8",
    ];

    const top = [
      "border-t",
      "border-t-0",
      "border-t-2",
      "border-t-4",
      "border-t-8",
    ];

    const bottom = [
      "border-b",
      "border-b-0",
      "border-b-2",
      "border-b-4",
      "border-b-8",
    ];

    const classes = [...right, ...left, ...top, ...bottom];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});

describe("rounded", () => {
  test("supports x|y with value", async (t) => {
    const classes = ["rounded", "rounded-0", "rounded-2", "rounded-4", "rounded-8", "rounded-16", "rounded-full", "rounded-t", "rounded-t-0", "rounded-t-2", "rounded-t-4", "rounded-t-8", "rounded-t-16", "rounded-t-full", "rounded-r", "rounded-r-0", "rounded-r-2", "rounded-r-4", "rounded-r-8", "rounded-r-16", "rounded-r-full", "rounded-b", "rounded-b-0", "rounded-b-2", "rounded-b-4", "rounded-b-8", "rounded-b-16", "rounded-b-full", "rounded-l", "rounded-l-0", "rounded-l-2", "rounded-l-4", "rounded-l-8", "rounded-l-16", "rounded-l-full", "rounded-tl-0", "rounded-tl-2", "rounded-tl-4", "rounded-tl-8", "rounded-tl-16", "rounded-tl-full", "rounded-tr-0", "rounded-tr-2", "rounded-tr-4", "rounded-tr-8", "rounded-tr-16", "rounded-tr-full", "rounded-br-0", "rounded-br-2", "rounded-br-4", "rounded-br-8", "rounded-br-16", "rounded-br-full", "rounded-bl-0", "rounded-bl-2", "rounded-bl-4", "rounded-bl-8", "rounded-bl-16", "rounded-bl-full"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});
