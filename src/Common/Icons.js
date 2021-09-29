import React from "react";
import { Image } from "react-native";

//image Import
import arrowBack from "../Assets/icons/arrowBack.png";
import filter from "../Assets/icons/filter.png";
import search from "../Assets/icons/search.png";
import calendar from "../Assets/icons/calendar.png";
import close from "../Assets/icons/close.png";

const styles = {
  defaultStyle: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
};

const Icons = {
  ArrowBack: (style = {}) => (
    <Image source={arrowBack} style={{ ...styles.defaultStyle, ...style }} />
  ),
  Calendar: (style = {}) => (
    <Image source={calendar} style={{ ...styles.defaultStyle, ...style }} />
  ),
  Filter: (style = {}) => (
    <Image source={filter} style={{ ...styles.defaultStyle, ...style }} />
  ),
  Close: (style = {}) => (
    <Image source={close} style={{ ...styles.defaultStyle, ...style }} />
  ),
  Search: (style = {}) => (
    <Image source={search} style={{ ...styles.defaultStyle, ...style }} />
  ),
};

export default Icons;
