import React from "react";
import { Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens

import Filter from "../Views/Screens/Filter";
import FilteredList from "../Views/Screens/FilteredList";

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};
const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Filter"
      >
        <Stack.Screen key="Filter" name="Filter" component={Filter} />
        <Stack.Screen
          key="FilteredList"
          name="FilteredList"
          component={FilteredList}
          options={{ cardStyleInterpolator: forSlide }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
