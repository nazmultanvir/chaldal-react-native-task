import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Color from "../../Common/Color";
import globalStyle from "../../Common/globalStyle";

const UserCard = ({ title, data, children }) => {
  const { profile } = data;
  return (
    <View style={[styles.container, styles.card]}>
      <Image
        style={styles.profileImage}
        source={{ uri: profile?.pictureUrl }}
      />
      <Text style={styles.title}>{profile?.name}</Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: "#80808063",
    overflow: "hidden",
    shadowColor: "#80808063",
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 4,
  },
  profileImage: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    padding: 5,
    color: Color.SecondaryText,
  },
});
