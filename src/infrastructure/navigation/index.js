import React, { useContext, useEffect } from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { MyTheme } from "../theme";

export const Navigation = () => {
  
  return (
    <NavigationContainer theme={MyTheme.dark}>
      <AppNavigator/>
    </NavigationContainer>
  );
};
