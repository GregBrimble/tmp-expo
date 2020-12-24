import { ReactTestInstance } from 'react-test-renderer'

declare module 'tailwindcss/defaultTheme' {
  const theme: {
    colors: Record<string, string | Record<string, string>>
    fontSize: Record<string, [string, Record<string, string>]>
    fontWeight: Record<string, string>
    spacing: Record<string, string>
    letterSpacing: Record<string, string>
    borderWidth: Record<string, string>
    borderRadius: Record<string, string>
    height: (theme: typeof theme) => Record<string, string>
    width: (theme: typeof theme) => Record<string, string>
    maxWidth: (theme: typeof theme, { breakpoints }) => Record<string, string>
    zIndex: Record<string, string>
  }
  export = theme
}

// https://github.com/testing-library/jest-native/issues/21
/* eslint-disable */
declare global {
  namespace jest {
    interface Matchers<R, T> {
      toBeDisabled(): R
      toContainElement(element: ReactTestInstance | null): R
      toBeEmpty(): R
      toHaveProp(attr: string, value?: any): R
      toHaveTextContent(
        text: string | RegExp,
        options?: { normalizeWhitespace: boolean },
      ): R
      toBeEnabled(): R
      toHaveStyle(style: object[] | object): R
    }
  }
}
/* eslint-enable */
