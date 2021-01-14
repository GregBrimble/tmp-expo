import { resolve } from 'path'
import { accessSync, writeFileSync } from 'fs'
import getAllConfigs from 'tailwindcss/lib/util/getAllConfigs'
import { defaultConfigFile } from 'tailwindcss/lib/constants'
import resolveConfig = require('tailwindcss/resolveConfig')
import defaultConfig = require('tailwindcss/stubs/defaultConfig.stub')

import { TailwindTheme } from './tailwindTheme'

// https://github.com/tailwindlabs/tailwindcss/blob/e8f4654a8b200e06737bb117b5a6afc10a4cbc88/src/index.js

const resolveConfigPath = (filePath?: string) => {
  if (typeof filePath === 'string') {
    return resolve(filePath)
  }

  try {
    const defaultConfigPath = resolve(defaultConfigFile)
    accessSync(defaultConfigPath)
    return defaultConfigPath
  } catch (err) {
    return undefined
  }
}

const getConfigFunction = (config?: string): { theme: TailwindTheme } => {
  let configObject
  if (config === undefined) {
    configObject = defaultConfig
  } else {
    configObject = require(config)
  }

  return resolveConfig(...getAllConfigs(configObject))
}

const loadTailwindTheme = (filePath?: string): TailwindTheme => {
  const config = getConfigFunction(resolveConfigPath(filePath))
  return config.theme
}

;(() => {
  // TODO: Allow custom input/output filepaths
  const configFilePath = resolve(__dirname, '../tailwind.config.js')
  const theme = loadTailwindTheme(configFilePath)
  const themeFilePath = resolve(__dirname, '../tailwindTheme.json')
  writeFileSync(themeFilePath, JSON.stringify(theme))
})()
