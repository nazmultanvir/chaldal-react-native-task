import { Dimensions } from "react-native";
import Color from "./Color";
const { width, height } = Dimensions.get("window");

const styles = {
  Center: {
    justifyContent: "center",
    alignItems: "center",
  },
  Color: {
    color: Color.MainColor,
  },
  MarginTop15: {
    marginTop: 15,
  },
  MarginRight15: {
    marginRight: 15,
  },
  MarginLeft15: {
    marginLeft: 15,
  },
  MarginBottom15: {
    marginBottom: 15,
  },
  PaddingLeft5: {
    paddingLeft: 5,
  },
  Horizontal15Padding: {
    paddingHorizontal: 15,
  },

  Vertical15Padding: {
    paddingVertical: 15,
  },
  All20Padding: {
    padding: 20,
  },
  Vertical20Padding: {
    paddingVertical: 20,
  },
  Horizontal20Padding: {
    paddingHorizontal: 20,
  },
  Flex: {
    flex: 1,
  },
  Row: {
    flexDirection: "row",
  },
  Column: {
    flexDirection: "column",
  },
  RowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  RowSpaceAround: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  RowSpaceEvenly: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  RowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  RowFlexEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  white: {
    color: "#fff",
  },
};

export default styles;
