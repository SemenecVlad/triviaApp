import React, { FunctionComponent } from "react";
import {View, StyleSheet} from "react-native";
import { colors } from "../../Styles/colors";

interface IProps {
  style?: any
}

export const Line: FunctionComponent<IProps> = (props) => (
  <View style={[styles.line, props.style]} />
);

const styles = StyleSheet.create({
  line: {
    height: 1,
    borderBottomColor: colors.violet,
    borderBottomWidth: 1
  }
});
