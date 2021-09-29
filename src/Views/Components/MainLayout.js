import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../Common/Color";
import Icons from "../../Common/Icons";
import globalStyle from "../../Common/globalStyle";
const { width, height } = Dimensions.get("window");

const MainLayout = ({ children, title, isBack, backAction, withoutScroll }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* statusbar color  */}
      <StatusBar backgroundColor={Colors.StatusBar} barStyle="light-content" />
      <View style={styles.headerContainer}>
        {/* checking to show go back arrow */}
        {isBack ? (
          <TouchableOpacity
            style={[globalStyle.Row, globalStyle.center]}
            onPress={() => backAction()}
          >
            {Icons.ArrowBack({ tintColor: "#fff" })}
            <Text style={[globalStyle.MarginLeft15, styles.headerTitleText]}>
              {title}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.headerTitleText}>{title}</Text>
        )}
      </View>
      {withoutScroll ? (
        <View style={{ flex: 1, flexDirection: "column" }}>{children}</View>
      ) : (
        <ScrollView>
          {children}
          <View style={{ paddingBottom: 30 }} />
        </ScrollView>
      )}
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
  headerTitleRow: {},
});
