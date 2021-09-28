import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

//import component
import MainLayout from "../../Components/MainLayout";
import Colors from "../../../Common/Color";
import globalStyle from "../../../Common/globalStyle";
import FilterGenerate from "../../Components/FilterGenerate";

const FilteredList = (props) => {
  const { navigation } = props;
  useEffect(() => {
    filterGenerateAction();
  });
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     filterGenerateAction();
  //   });
  //   return unsubscribe;
  // }, [navigation]);
  filterGenerateAction = async (data) => {
    console.log("function is called !");

    return null;
  };
  return (
    <MainLayout
      title="Filtered List"
      isBack
      backAction={() => navigation.popToTop()}
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
};

export default FilteredList;

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
