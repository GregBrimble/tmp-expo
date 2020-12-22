import { Theme } from "@theme-ui/css";
import { default as twTheme } from "tailwindcss/defaultTheme";

const flattenColors = (colors: typeof twTheme.colors) =>
  Object.fromEntries(
    Object.entries(colors)
      .map(([key, value]) => {
        if (value && typeof value === "object") {
          return Object.entries(value).map(([subKey, subValue]) => [
            `${key}-${subKey}`,
            subValue,
          ]);
        }

        return [[key, value]];
      })
      .flat()
  );

const stringToNumber = (value: string) =>
  Number(value.replace(/[^0-9\.]/g, ""));
const remToPx = (value: number) => value * 16;
const isLength = (value: string) => {
  value = value.toLowerCase();
  // TODO: Better parser
  return (
    value.endsWith("rem") ||
    value.endsWith("px") ||
    value.endsWith("%") ||
    !isNaN(+value)
  );
};
const convertLength = (value: string) => {
  value = value.toLowerCase().trim();
  // TODO: Better parser
  if (value.endsWith("rem")) {
    return remToPx(stringToNumber(value));
  } else if (value.endsWith("px")) {
    return stringToNumber(value);
  } else if (value.endsWith("%")) {
    return value;
  } else {
    throw new Error(`Unknown unit: ${value}`);
  }
};

const { current, ...colors } = flattenColors(twTheme.colors);
const fontSizes = Object.values(twTheme.fontSize)
  .map(([value, other]) => value)
  .map(convertLength);

// TODO: Negative
const space = Object.fromEntries(
  Object.entries(twTheme.spacing).map(([key, value]) => [
    key,
    convertLength(value),
  ])
);
const borderWidths = Object.fromEntries(
  Object.entries(twTheme.borderWidth).map(([key, value]) => [
    key,
    convertLength(value),
  ])
);
const radii = Object.fromEntries(
  Object.entries(twTheme.borderRadius).map(([key, value]) => [
    key,
    convertLength(value),
  ])
);
const { auto, ...zIndices } = Object.fromEntries(
  Object.entries(twTheme.zIndex).map(([key, value]) => [key, Number(value)])
);

// TODO: Custom breakpoints
const sizes = Object.fromEntries([
  ...Object.entries(twTheme.width(() => twTheme.spacing))
    .filter(([key, value]) => isLength(value))
    .map(([key, value]) => [key, convertLength(value)]),
  ...Object.entries(twTheme.maxWidth(() => {}, { breakpoints: () => [] }))
    .filter(([key, value]) => isLength(value))
    .map(([key, value]) => [key, convertLength(value)]),
]);
console.log(sizes);

export const theme: Theme = {
  colors,
  fonts: {}, // TODO
  fontSizes,
  // fontWeights: twTheme.fontWeight,
  lineHeights: [], // TODO
  space,
  letterSpacings: twTheme.letterSpacing,
  sizes,
  borders: [], // TODO
  borderWidths,
  borderStyles: {}, // TODO
  radii,
  shadows: [], // TODO
  zIndices,
};
