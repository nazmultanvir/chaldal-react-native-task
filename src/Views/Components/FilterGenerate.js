import React, { useState } from "react";
import Colors from "../../Common/Color";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SectionTitle from "./SectionTitle";
import DatePicker from "./DatePicker";
import globalStyle from "../../Common/globalStyle";
import CheckBox from "../../Views/Components/CheckBox";

const FilterGenerate = (props) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [activeStatus, setActiveStatus] = useState(true);
  const [supperActiveStatus, setSupperActiveStatus] = useState(true);
  const [boredStatus, setBoredStatus] = useState(true);

  const generateUserAnalysis = () => {
    let data = {
      fromDate,
      toDate,
      activeStatus,
      supperActiveStatus,
      boredStatus,
    };
    props.generateAction(data);
  };
  return (
    <View style={styles.filterContainer}>
      <SectionTitle title="Date">
        <DatePicker
          key="form"
          title="From"
          value={fromDate}
          onChangeDate={(data) => setFromDate(data)}
        />
        <DatePicker
          key="to"
          title="To"
          value={toDate}
          onChangeDate={(data) => setToDate(data)}
        />
      </SectionTitle>
      <View style={globalStyle.MarginTop15} />
      <SectionTitle title="Status">
        <View>
          <CheckBox
            title="Active"
            value={activeStatus}
            onChangeDate={(status) => setActiveStatus(status)}
          />
          <CheckBox
            title="Super Active"
            value={supperActiveStatus}
            onChangeDate={(status) => setSupperActiveStatus(status)}
          />
          <CheckBox
            title="Bored"
            value={boredStatus}
            onChangeDate={(status) => setBoredStatus(status)}
          />
        </View>
      </SectionTitle>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.generateButton}
          onPress={() => generateUserAnalysis()}
        >
          <Text style={styles.generateButtonText}>Generate</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    marginVertical: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  generateButton: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 6,
  },
  generateButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
