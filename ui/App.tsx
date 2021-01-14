import { StatusBar } from 'expo-status-bar'
import React, { createRef, FC } from 'react'
import { View } from 'react-native'
import { H1 as ExpoH1 } from '@expo/html-elements'
import { Text as RNText } from 'react-native'
import { withTWRN } from './twrn'

const H1 = withTWRN(ExpoH1)
const Text = withTWRN(RNText)

export const App: FC = () => {
  // const theme = generateTheme()
  const ref = createRef<Text>()
  return (
    // <DripsyProvider theme={theme}>
    <View>
      <Text className="some classNames hover:w-4 md:w-5 sm:active:hi" ref={ref}>
        Hello, world!
      </Text>
      <StatusBar style="auto" />
    </View>
    // </DripsyProvider>
  )
}
