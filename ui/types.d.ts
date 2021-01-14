import { ReactTestInstance } from 'react-test-renderer'

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

declare module 'tailwindcss/lib/util/getAllConfigs'
declare module 'tailwindcss/lib/constants'
declare module 'tailwindcss/resolveConfig'
declare module 'tailwindcss/stubs/defaultConfig.stub'
