import {StyleSheet} from "react-native";
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";

export const questionStyles = StyleSheet.create({
  categoryTitle: {
    fontFamily: fonts.Bold,
    fontSize: 32,
    color: colors.violet,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold"
  },
  categoryQuestion: {
    fontFamily: fonts.Regular,
    fontSize: 28,
    color: colors.violet,
    textAlign: "left",
    marginVertical: 50
  },
  categoryLevel: {
    fontFamily: fonts.Regular,
    fontSize: 18,
    color: colors.violet,
    textAlign: "center",
  },
  buttonText: {
    fontFamily: fonts.Bold,
    textAlign: "center",
    fontSize: 26,
    color: "white"
  },
  linearGradient: {
    flex: 1,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center"
  },
  correctAnswers: {
    color: colors.darkOrange,
    fontSize: 24,
    fontWeight: "bold"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
  }
})