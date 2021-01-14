import { TailwindTheme } from '../../scripts/tailwindTheme'
import tailwindTheme from '../../tailwindTheme.json'

type RemLength = `${number}rem`
type PxLength = `${number}px`
type PercentLength = `${number}%`
type Length = RemLength | PxLength | PercentLength

const isRem = (length: Length): length is RemLength => {
  return (length as RemLength).endsWith('rem')
}
const isPx = (length: Length): length is PxLength => {
  return (length as PxLength).endsWith('px')
}
const isPercent = (length: Length): length is PercentLength => {
  return (length as PercentLength).endsWith('%')
}

const convertLength = (length: Length) => {
  const value = Number(length.replace(/[^0-9.]/g, ''))
  if (isRem(length)) {
    return remToPixels(length)
  } else if (isPx(length)) {
    return
  }
}

const prepareColors = (colors: TailwindTheme['colors']) =>
  Object.fromEntries(
    Object.entries(colors)
      .map(([key, value]) => {
        if (value && typeof value === 'object') {
          return Object.entries(value).map(([subKey, subValue]) => [
            `${key}-${subKey}`,
            subValue,
          ])
        }

        return [[key, value]]
      })
      .flat()
      .filter(([, value]) => value !== 'currentColor'),
  )

const prepareFontSizes = (fontSize: TailwindTheme['fontSize']) =>
  Object.values(fontSize)
    .map(([key]) => key)
    .map(convertLength)

const mapTailwindToThemeUI = (theme: TailwindTheme): Theme => ({
  // alerts
  // badges
  // borderStyles
  // borderWidths
  // borders
  // breakpoints
  // buttons
  // cards
  // colorStyles
  colors: {
    // text: '#f00',
    // background: 'white',
    ...prepareColors(theme.colors),
  },
  fontSizes: {
    ...prepareFontSizes(theme.fontSize),
  },
  // fontWeights
  // fonts
  // forms
  // grids
  // images
  // initialColorModeName
  // layout
  // letterSpacings
  // lineHeights
  // links
  // mediaQueries
  // messages
  // opacities
  // printColorModeName
  // radii
  // shadows
  // sizes
  // space
  // styles
  // text
  // textStyles
  // transitions
  // useBodyStyles
  // useBorderBox
  // useColorSchemeMediaQuery
  // useCustomProperties
  // useLocalStorage
  // zIndices
})

// const stringToNumber = (value: string) => Number(value.replace(/[^0-9.]/g, ''))
// const remToPx = (value: number) => value * 16
// const isLength = (value: string) => {
//   value = value.toLowerCase()
//   // TODO: Better parser
//   return (
//     value.endsWith('rem') ||
//     value.endsWith('px') ||
//     value.endsWith('%') ||
//     !isNaN(+value)
//   )
// }
// const convertLength = (value: string) => {
//   value = value.toLowerCase().trim()
//   // TODO: Better parser
//   if (value.endsWith('rem')) {
//     return remToPx(stringToNumber(value))
//   } else if (value.endsWith('px')) {
//     return stringToNumber(value)
//   } else if (value.endsWith('%')) {
//     return value
//   } else {
//     throw new Error(`Unknown unit: ${value}`)
//   }
// }

// const { current, ...colors } = flattenColors(twTheme.colors)
// const fontSizes = Object.values(twTheme.fontSize)
//   .map(([value, other]) => value)
//   .map(convertLength)

// // TODO: Negative
// const space = Object.fromEntries(
//   Object.entries(twTheme.spacing).map(([key, value]) => [
//     key,
//     convertLength(value),
//   ]),
// )
// const borderWidths = Object.fromEntries(
//   Object.entries(twTheme.borderWidth).map(([key, value]) => [
//     key,
//     convertLength(value),
//   ]),
// )
// const radii = Object.fromEntries(
//   Object.entries(twTheme.borderRadius).map(([key, value]) => [
//     key,
//     convertLength(value),
//   ]),
// )
// const { auto, ...zIndices } = Object.fromEntries(
//   Object.entries(twTheme.zIndex).map(([key, value]) => [key, Number(value)]),
// )

// // TODO: Custom breakpoints
// const sizes = Object.fromEntries([
//   ...Object.entries(twTheme.width(() => twTheme.spacing))
//     .filter(([key, value]) => isLength(value))
//     .map(([key, value]) => [key, convertLength(value)]),
//   ...Object.entries(
//     twTheme.maxWidth(
//       () => {
//         return
//       },
//       { breakpoints: () => [] },
//     ),
//   )
//     .filter(([key, value]) => isLength(value))
//     .map(([key, value]) => [key, convertLength(value)]),
// ])

// export const theme: Theme = {
//   colors,
//   fonts: {}, // TODO
//   fontSizes,
//   // fontWeights: twTheme.fontWeight,
//   lineHeights: [], // TODO
//   space,
//   letterSpacings: twTheme.letterSpacing,
//   sizes,
//   borders: [], // TODO
//   borderWidths,
//   borderStyles: {}, // TODO
//   radii,
//   shadows: [], // TODO
//   zIndices,
// }
