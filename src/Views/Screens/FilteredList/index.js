import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  ScrollView,
  TextInput,
} from "react-native";

//import component
import MainLayout from "../../Components/MainLayout";
import Colors from "../../../Common/Color";
import globalStyle from "../../../Common/globalStyle";
import FilterGenerate from "../../Components/FilterGenerate";
import UserCard from "../../Components/UserCard";

import userList from "../../../Assets/data/userList";
import Icons from "../../../Common/Icons";
import Data from "../../../Common/Utilities";

const FilteredList = (props) => {
  const { navigation, route } = props;
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filter, setFilter] = useState(route.params?.filter);
  const [searchText, setSearchText] = useState("");

  const generateModal = (filterData) => {
    setFilter(filterData);
    setShowFilterModal(false);
  };
  const generateKey = () => {
    return Math.floor(Math.random() * 100000);
  };
  const openFilterModal = () => {
    setShowFilterModal(true);
  };
  const onSearchTextChange = (text) => {
    setSearchText(text);
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
      <View style={styles.SearchContainer}>
        <TextInput
          style={styles.SearchInput}
          onChangeText={(text) => onSearchTextChange(text)}
          value={searchText}
          placeholder="Search By Name"
        />
        <View style={styles.searchIcon}>
          {Icons.Search({
            tintColor: "#000",
            width: 25,
            height: 35,
          })}
        </View>
      </View>
      <View style={[globalStyle.Flex]}>
        <FlatList
          data={Data.UserDataFilter(filter, searchText)}
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
        {Data.UserDataFilter(filter, searchText).length < 1 ? (
          <View style={styles.noUserFound}>
            <Text>No User Found</Text>
          </View>
        ) : null}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFilterModal}
        onRequestClose={() => setShowFilterModal(false)}
      >
        <View style={styles.ModalView}>
          <View style={styles.modalView}>
            <View style={[globalStyle.Row, globalStyle.RowSpaceBetween]}>
              <Text style={styles.modalText}>Edit Filter</Text>
              <TouchableOpacity onPress={() => setShowFilterModal(false)}>
                {Icons.Close({ tintColor: Colors.MainColor })}
              </TouchableOpacity>
            </View>
            <ScrollView>
              <FilterGenerate
                from={filter?.fromDate}
                to={filter?.toDate}
                activeStatus={filter?.active}
                superActiveStatus={filter?.superActive}
                boredStatus={filter?.bored}
                generateAction={(data) => generateModal(data)}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
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
  ModalView: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 15,
  },
  modalText: {
    color: Colors.MainColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  modalCloseText: {
    fontSize: 25,
    color: Colors.MainColor,
    fontWeight: "bold",
  },
  SearchContainer: {
    marginHorizontal: 12,
    borderColor: Colors.MainColor,
    borderWidth: 1,
    borderRadius: 4,
    height: 35,
    marginBottom: 10,
    justifyContent: "center",
    flexDirection: "column",
  },
  searchIcon: {
    position: "absolute",
    top: 0,
    left: 5,
  },
  SearchInput: {
    paddingLeft: 40,
    alignItems: "center",

    fontSize: 16,
  },
  pageSubTitle: {
    color: Colors.SecondaryText,
    marginTop: 10,
  },
  noUserFound: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
