import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../Common/Color";

const MainLayout = ({ children, title, isBack }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.StatusBar} barStyle="light-content" />
      <View style={styles.headerContainer}>
        {isBack ? (
          <TouchableOpacity>
            <Text style={styles.headerTitleText}>{title}</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.headerTitleText}>{title}</Text>
        )}
      </View>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 13,
    paddingHorizontal: 15,
    backgroundColor: Colors.MainColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 13,
  },
  headerTitleText: {
    color: "#fff",
    fontSize: 16,
  },
});
