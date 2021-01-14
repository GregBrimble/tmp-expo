import { StatusBar } from 'expo-status-bar'
import React, { FC } from 'react'
import { DripsyProvider, Text, View } from 'dripsy'

import { theme } from './theme'

// TODO: Fix H1 etc.

const x = 'sm:mt-4:hover'

export const App: FC = () => {
  return (
    <DripsyProvider theme={theme}>
      <View>
        <Text
          sx={{
            color: ['red-600', 'blue-600'],
          }}
        >
          Hello, world!
        </Text>
        <StatusBar style="auto" />
      </View>
    </DripsyProvider>
  )
}
