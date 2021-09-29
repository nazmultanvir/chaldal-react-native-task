import React from "react";
import { LogBox } from "react-native";
import AppNavigator from "./src/Route/AppNavigator";

LogBox.ignoreLogs(["Non-serializable"]);

export default function App() {
  return <AppNavigator />;
}
