import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

//import component
import MainLayout from "../../Components/MainLayout";
import Colors from "../../../Common/Color";
import globalStyle from "../../../Common/globalStyle";
import FilterGenerate from "../../Components/FilterGenerate";

const Filter = (props) => {
  const [fromDate, setFromDate] = useState(new Date("2016-05-10"));
  const [toDate, setToDate] = useState(new Date("2017-05-16"));
  const [active, setActive] = useState(true);
  const [superActive, setSuperActive] = useState(true);
  const [bored, setBored] = useState(true);
  filterGenerateAction = (data) => {
    props.navigation.push("FilteredList", { filter: data });
  };
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
          <FilterGenerate
            from={fromDate}
            to={toDate}
            activeStatus={active}
            superActiveStatus={superActive}
            boredStatus={bored}
            generateAction={(data) => filterGenerateAction(data)}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default Filter;
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
