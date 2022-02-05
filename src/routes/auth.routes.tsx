import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../global/styles/theme";

import { Home } from "../screens/home";
import { SignIn } from "../screens/signIn";

const Stack = createNativeStackNavigator();

export type RootStackParamsList = {
  SignIn: undefined;
  Home: undefined;
};

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Stack.Screen name={"SignIn"} component={SignIn} />
      <Stack.Screen name={"Home"} component={Home} />
    </Stack.Navigator>
  );
}
