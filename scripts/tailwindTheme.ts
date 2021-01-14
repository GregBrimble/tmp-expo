/// <reference types="./tailwindcss" />

export type TailwindTheme = {
  screens: Record<string, string>
  colors: Record<string, string | Record<string, string>>
  spacing: Record<string, string>
  animation: Record<string, string>
  backgroundColor: TailwindTheme['colors']
  backgroundImage: Record<string, string>
  backgroundOpacity: TailwindTheme['opacity']
  backgroundPosition: Record<string, string>
  backgroundSize: Record<string, string>
  borderColor: TailwindTheme['colors']
  borderOpacity: TailwindTheme['opacity']
  borderRadius: Record<string, string>
  borderWidth: Record<string, string>
  boxShadow: Record<string, string>
  container: Record<string, never>
  cursor: Record<string, string>
  divideColor: TailwindTheme['borderColor']
  divideOpacity: TailwindTheme['borderOpacity']
  divideWidth: TailwindTheme['borderWidth']
  fill: Record<string, string>
  flex: Record<string, string>
  flexGrow: Record<string, string>
  flexShrink: Record<string, string>
  fontFamily: Record<string, string[]>
  fontSize: Record<string, (string | Record<string, string>)[]>
  fontWeight: Record<string, string>
  gap: TailwindTheme['spacing']
  gradientColorStops: TailwindTheme['colors']
  gridAutoColumns: Record<string, string>
  gridAutoRows: Record<string, string>
  gridColumn: Record<string, string>
  gridColumnEnd: Record<string, string>
  gridColumnStart: Record<string, string>
  gridRow: Record<string, string>
  gridRowStart: Record<string, string>
  gridRowEnd: Record<string, string>
  transformOrigin: Record<string, string>
  gridTemplateColumns: Record<string, string>
  gridTemplateRows: Record<string, string>
  height: TailwindTheme['spacing']
  inset: TailwindTheme['spacing']
  keyframes: Record<string, Record<string, Record<string, string>>>
  letterSpacing: Record<string, string>
  lineHeight: Record<string, string>
  listStyleType: Record<string, string>
  margin: TailwindTheme['spacing']
  maxHeight: TailwindTheme['spacing']
  maxWidth: TailwindTheme['screens']
  minHeight: Record<string, string>
  minWidth: Record<string, string>
  objectPosition: Record<string, string>
  opacity: Record<string, string>
  order: Record<string, string>
  outline: Record<string, string[]>
  padding: TailwindTheme['spacing']
  placeholderColor: TailwindTheme['colors']
  placeholderOpacity: TailwindTheme['opacity']
  ringColor: TailwindTheme['colors']
  ringOffsetColor: TailwindTheme['colors']
  ringOffsetWidth: Record<string, string>
  ringOpacity: TailwindTheme['opacity']
  ringWidth: Record<string, string>
  rotate: Record<string, string>
  scale: Record<string, string>
  skew: Record<string, string>
  space: TailwindTheme['spacing']
  stroke: Record<string, string>
  strokeWidth: Record<string, string>
  textColor: TailwindTheme['colors']
  textOpacity: TailwindTheme['opacity']
  transitionDuration: Record<string, string>
  transitionProperty: Record<string, string>
  transitionTimingFunction: Record<string, string>
  translate: TailwindTheme['spacing']
  width: TailwindTheme['spacing']
  zIndex: Record<string, string>
}
