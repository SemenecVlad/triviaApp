import {StyleSheet} from "react-native";
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";

export const startStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.Bold,
    textAlign: "center",
    fontSize: 26,
    color: "white"
  },
  dropdown: {position: "absolute", top: 60, left: 0, right: 0, backgroundColor: colors.white, zIndex: 999, borderRadius: 14, elevation: 1},
  level: {
    fontFamily: fonts.Bold,
    fontSize: 13,
    color: colors.white
  },
  borderedWrapper: {height: 54, borderColor: colors.white, borderWidth: 1, borderRadius: 14},
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 13,
    fontFamily: fonts.Bold,
    paddingHorizontal: 14,
    color: colors.white
  },
  labelText: {
    color: colors.lightOrange,
    fontSize: 13,
    marginLeft: 10,
    marginBottom: 10
  },
  bottom: {
    height: 70,
    justifyContent: "flex-end",
    marginBottom: 30,
  }
})