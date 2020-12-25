import {StyleSheet} from "react-native";
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";

export const resultsStyles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 36,
    paddingTop: 36,
    backgroundColor: colors.violet
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: fonts.Bold,
    fontSize: 19,
    color: colors.white
  },
  correctAnswers: {
    color: colors.darkOrange,
    fontSize: 24
  }
})