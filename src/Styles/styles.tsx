import {StyleSheet} from "react-native";
import { colors } from "./colors";

export const commonStyles = StyleSheet.create({
  violetWrapper: {
    flex: 1,
    backgroundColor: colors.violet
  },
  whiteWrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  closeCircleWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
})