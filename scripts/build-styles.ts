/// <reference types="./types" />

import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import postcss from 'postcss'
import transform from 'css-to-react-native-transform'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import postcssconfig = require('../postcss.config.js')

const INPUT_FILE_PATH = resolve('./styles.css')
const OUTPUT_FILE_PATH = resolve('./styles.json')
//
;(async () => {
  const css = readFileSync(INPUT_FILE_PATH, 'utf8')
  const processor = postcss(postcssconfig.plugins)
  console.log('Parsing css...')
  const result = await processor.process(css, { from: INPUT_FILE_PATH })
  console.log('Parsed. Converting to React Native styles...')
  const styles = transform(result.css, { parseMediaQueries: true })
  console.log('Converted. Writing to disk...')
  writeFileSync(OUTPUT_FILE_PATH, JSON.stringify(styles))
  console.log('Complete!')
})()
