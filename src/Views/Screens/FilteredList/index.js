import React, { useEffect, useState, useRef } from "react";
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
import { set } from "react-native-reanimated";

const FilteredList = (props) => {
  const { navigation, route } = props;
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filter, setFilter] = useState(route.params?.filter);
  const [filteredUsers, setFilterUsers] = useState(route.params?.filter);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    filterGenerateAction(route.params?.filter);
    return () => null;
  }, []);
  filterGenerateAction = async (filterData) => {
    return null;
  };
  const filteredUserList = () => {
    let users = [];
    if (userList) {
      userList.map((user) => {
        let dateList = validDateList(
          filter?.fromDate,
          filter?.toDate,
          objectArray(user.calendar?.dateToDayId)
        );
        let mealId = objectArray(user.calendar?.mealIdToDayId);
        let meal = mealCount(dateList, mealId);
        let userCustomizeData = {
          name: user.profile?.name,
          pictureUrl: user.profile?.pictureUrl,
          meal: meal,
        };
        if (filter.bored && meal < 5) {
          users.push(userCustomizeData);
        }
        if (filter.active && meal >= 5 && meal < 10) {
          users.push(userCustomizeData);
        } else if (filter.superActive && meal >= 10) {
          users.push(userCustomizeData);
        }
      });
    }
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  const mealCount = (dateList, mealList) => {
    let mealAmount = 0;
    dateList.map((date) => {
      mealList.map((meal) => {
        if (date.id === meal.id) {
          mealAmount = mealAmount + 1;
        }
      });
    });

    return mealAmount;
  };
  const validDateList = (from, to, data) => {
    let dateList = [];
    data.map((x) => {
      var inRange =
        new Date(x.date) >= new Date(from) && new Date(x.date) <= new Date(to);
      if (inRange) {
        dateList.push(x);
      }
    });
    return dateList;
  };
  const objectArray = (value) => {
    let array = [];
    Object.keys(value).map((key) => array.push({ date: key, id: value[key] }));
    return array;
  };
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
          data={filteredUserList()}
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
        {filteredUserList().length < 1 ? (
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
