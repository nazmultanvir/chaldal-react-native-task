import React, { useEffect } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

//import component
import MainLayout from "../../Components/MainLayout";
import Colors from "../../../Common/Color";
import globalStyle from "../../../Common/globalStyle";
import FilterGenerate from "../../Components/FilterGenerate";
import UserCard from "../../Components/UserCard";

import userList from "../../../Assets/data/userList";
import Icons from "../../../Common/Icons";

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
    // console.log("function is called !", userList);
    return null;
  };
  const generateKey = () => {
    return Math.floor(Math.random() * 100000);
  };
  const openFilterModal = () => {
    console.log("log");
  };
  return (
    <MainLayout
      title="Filtered List"
      isBack
      backAction={() => navigation.popToTop()}
      withoutScroll
    >
      <View
        style={[
          globalStyle.Vertical15Padding,
          globalStyle.Horizontal15Padding,
          globalStyle.RowFlexEnd,
        ]}
      >
        <TouchableOpacity
          style={[globalStyle.Row, globalStyle.Center]}
          onPress={() => openFilterModal()}
        >
          <Text style={styles.filterButtonText}>Edit Filter</Text>
          {Icons.Filter({ tintColor: Colors.MainColor })}
        </TouchableOpacity>
      </View>
      <View style={[globalStyle.Flex]}>
        <FlatList
          data={userList}
          renderItem={({ index, item }) => <UserCard key={index} data={item} />}
          keyExtractor={() => generateKey()}
          numColumns={2}
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 5,
            marginHorizontal: 5,
          }}
        />
      </View>
    </MainLayout>
  );
};

export default FilteredList;

const styles = StyleSheet.create({
  filterButtonText: {
    color: Colors.MainColor,
    fontSize: 18,
    paddingRight: 10,
    fontWeight: "bold",
  },
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
