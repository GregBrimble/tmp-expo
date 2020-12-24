module.exports = {
  roots: ['ui/', 'api/'],
  preset: 'jest-expo',
  setupFiles: ['cross-fetch/polyfill'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*'],
}
