import React, { FunctionComponent } from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";

interface IProps {
  onPress?(): void;
  style?: any;
  text: string;
  textColor: string;
  bgColor: string;
}

export const GenericButton: FunctionComponent<IProps> = (props) => (
  <TouchableOpacity
    style={[styles.button, props.style, {backgroundColor: props.bgColor ? props.bgColor : colors.white}]}
    onPress={props.onPress}
  >
    <Text
      style={[styles.buttonText, {fontSize: 15, color: props.textColor ? props.textColor : colors.black}]}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: fonts.Bold,
    textAlign: "center",
    fontSize: 26,
    color: colors.white
  },
  button: {
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    height: 54,
  }
})