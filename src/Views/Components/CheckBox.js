import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import globalStyle from "../../Common/globalStyle";
import Colors from "../../Common/Color";
import Icons from "../../Common/Icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const CheckBoxComponent = ({ title, value, onChangeDate }) => {
  return (
    <>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={value}
          onValueChange={(value) => onChangeDate(value)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>{title}</Text>
      </View>
    </>
  );
};
export default CheckBoxComponent;
const styles = StyleSheet.create({
  checkboxContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
  },
  label: {
    paddingTop: 6,
    paddingLeft: 3,
    textAlign: "center",
  },
});
