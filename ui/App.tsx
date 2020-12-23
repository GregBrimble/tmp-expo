import { StatusBar } from 'expo-status-bar'
import React, { FC } from 'react'
import { View } from 'react-native'
import { DripsyProvider, styled, Text, Button } from 'dripsy'

import { theme } from './theme'

// TODO: Fix H1 etc.

const Container = styled(View)({
  flex: 1,
  bg: ['white', 'blue-600'],
  margin: 4,
})

// const MyButton = styled(Button)({
//   bg: ["white"],
//   color: "white",
//   backgroundColor: "white",
// });

export const App: FC = () => {
  return (
    <DripsyProvider theme={theme}>
      <Container sx={{ height: 100 }}>
        <Text
          sx={{
            width: ['1/2', 'full'],
            height: 100,
          }}
        >
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </Container>
      <Button
        title="Click Me"
        onPress={() => alert('hi')}
        sx={{ backgroundColor: 'red-600' }}
      />
    </DripsyProvider>
  )
}