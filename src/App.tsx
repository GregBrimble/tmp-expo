import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { DripsyProvider, styled, H1, Button } from "dripsy";

import { theme } from "./theme";

const Container = styled(View)({
  flex: 1,
  bg: ["white", "blue-600"],
  margin: 4,
});

const MyButton = styled(Button)({
  bg: ["white"],
  color: "white",
  backgroundColor: "white",
});

export const App = () => {
  return (
    <DripsyProvider theme={theme}>
      <Container sx={{ height: 100 }}>
        <H1
          sx={{
            width: ["1/2", "full"],
            height: 100,
          }}
        >
          Open up App.tsx to start working on your app!
        </H1>
        <StatusBar style="auto" />
      </Container>
      <Button
        title="Click Me"
        onPress={() => {}}
        sx={{ backgroundColor: "red-600" }}
      />
    </DripsyProvider>
  );
};
