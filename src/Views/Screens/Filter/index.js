import React from "react";
import { Text, View, StyleSheet } from "react-native";

//import component
import MainLayout from "../../Components/MainLayout";
import Colors from "../../../Common/Color";
import globalStyle from "../../../Common/globalStyle";
import FilterGenerate from "../../Components/FilterGenerate";

export default function Filter() {
  filterGenerateAction = () => {};
  return (
    <MainLayout title="Filter">
      <View
        style={[globalStyle.Horizontal15Padding, globalStyle.Vertical15Padding]}
      >
        <View style={[styles.pageTitleSection, globalStyle.Center]}>
          <Text style={styles.pageTitle}>User Analyzer</Text>
          <Text style={styles.pageSubTitle}>
            Select Filters to generate report
          </Text>
        </View>
        <View style={styles.filterSection}>
          <FilterGenerate generateAction={() => filterGenerateAction()} />
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