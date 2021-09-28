import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../../Common/Color";
import globalStyle from "../../Common/globalStyle";

const SectionTitle = ({ title, children }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divider} />
      <View>{children}</View>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: Color.PrimaryText,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Color.SecondaryText,
    marginVertical: 3,
  },
});
