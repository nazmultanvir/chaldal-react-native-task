import React from "react";
import Colors from "../../Common/Color";
import { View, Text, StyleSheet } from "react-native";
import SectionTitle from "./SectionTitle";
import DatePicker from "./DatePicker";
import globalStyle from "../../Common/globalStyle";

const FilterGenerate = () => {
  return (
    <View style={styles.filterContainer}>
      <SectionTitle title="Date">
        <DatePicker key="form" title="From" />
        <DatePicker key="to" title="To" />
      </SectionTitle>
      <View style={globalStyle.MarginTop15} />
      <SectionTitle title="Status">
        <Text>filter</Text>
      </SectionTitle>
    </View>
  );
};

export default FilterGenerate;

const styles = StyleSheet.create({
  filterContainer: {
    marginVertical: 20,
    borderColor: Colors.MainColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
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
