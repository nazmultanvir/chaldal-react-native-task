import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Color from "../../Common/Color";

const UserCard = ({ title, data, children }) => {
  const status = (meal) => {
    if (meal >= 10) {
      return "Super Active";
    } else if (meal >= 5) {
      return "Active";
    } else {
      return "Bored";
    }
  };
  return (
    <View style={[styles.container, styles.card]}>
      <Image style={styles.profileImage} source={{ uri: data?.pictureUrl }} />
      <View
        style={[
          styles.userStatus,
          {
            backgroundColor:
              status(data.meal) == "Bored" ? "#ff5722" : Color.MainColor,
          },
        ]}
      >
        <Text style={styles.userStatusText}>{status(data.meal)}</Text>
      </View>
      <Text style={styles.title}>{data?.name}</Text>
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
  userStatus: {
    position: "absolute",
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    top: 20,
    flex: 1,
  },
  userStatusText: {
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
  },
  title: {
    height: 40,
    padding: 5,
    color: Color.SecondaryText,
    fontSize: 16,
  },
});
