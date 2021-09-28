import React from "react";
import { Text, View, StyleSheet } from "react-native";

//import component
import MainLayout from "../../Components/MainLayout";
import Colors from "../../../Common/Color";
import globalStyle from "../../../Common/globalStyle";
import FilterGenerate from "../../Components/FilterGenerate";

export default function FilteredList(props) {
  filterGenerateAction = (data) => {
    props.navigation.navigate("FilteredList");
  };
  return (
    <MainLayout
      title="Filtered List"
      isBack
      backAction={() => props.navigation.goBack()}
    >
      <View
        style={[globalStyle.Horizontal15Padding, globalStyle.Vertical15Padding]}
      >
        <View>
          <Text>Hi</Text>
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  pageTitleSection: {
    marginVertical: 20,
  },
  pageTitle: {
    color: Colors.PrimaryText,
    fontSize: 20,
    fontWeight: "700",
  },
  pageSubTitle: {
    color: Colors.SecondaryText,
    marginTop: 10,
  },
  filterSection: {},
});
