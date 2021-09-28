import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import globalStyle from "../../Common/globalStyle";
import Colors from "../../Common/Color";
import Icons from "../../Common/Icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ title, value, onChangeDate }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date(value));

  const onChange = (event, selectedDate) => {
    setShowDatePicker(false);
    const currentDate = selectedDate || date;
    onChangeDate(currentDate);
    setDate(currentDate);
  };

  const showDate = (date) => {
    var current = new Date(date);
    var dd = String(current.getDate()).padStart(2, "0");
    var MonthName = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    );
    return `${dd} ${MonthName[current.getMonth()]} ${current.getFullYear()}`;
  };
  return (
    <>
      <View style={[globalStyle.Row, styles.Container]}>
        <View style={styles.DatePickerTextContainer}>
          <Text style={styles.DatePickerText}>{title}</Text>
        </View>
        <TouchableOpacity
          style={styles.DatePicker}
          onPress={() => setShowDatePicker(!showDatePicker)}
        >
          <View style={styles.DatePickerContainer}>
            <Text style={styles.DateText}>{showDate(value)}</Text>
            {Icons.Calendar({})}
          </View>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(e, date) => onChange(e, date)}
        />
      )}
    </>
  );
};

export default DatePicker;
const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
  },
  DatePickerTextContainer: {
    width: 50,
  },
  DatePickerText: {
    color: Colors.MainColor,
  },
  DatePicker: {
    borderRightWidth: 1,
    borderWidth: 1,
    borderColor: Colors.MainColor,
    paddingHorizontal: 10,
    borderRadius: 3,
    flex: 1,
    height: 35,
  },
  DatePickerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 7,
  },
  DateText: {
    color: Colors.SecondaryText,
  },
  pageSubTitle: {
    color: Colors.SecondaryText,
    marginTop: 10,
  },
  filterSection: {},
});
