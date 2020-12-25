import React, { FunctionComponent } from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";

interface IProps {
  onPress?(): void;
  style?: any;
  text: string;
  textColor: string;
  bgColors: Array<string>;
  shadowColor?: string;
  disabled?: boolean;
}

export const GradientButton: FunctionComponent<IProps> = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    disabled={props.disabled}
    style={[styles.button, props.shadowColor ? {
      shadowOffset:{  width: 0,  height: 4,  },
      shadowColor: props.shadowColor,
      shadowRadius: 0,
      shadowOpacity: 1.0,
    } : {}, props.style]}
  >
    <LinearGradient
      colors={props.bgColors}
      useAngle={true}
      angle={90}
      style={styles.linearGradient}
    >
      <Text style={[styles.text, {fontSize: 15, color: props.textColor ? props.textColor : colors.black}]}>
        {props.text}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Bold,
    textAlign: "center",
    fontSize: 26,
    color: colors.white
  },
  linearGradient: {
    flex: 1,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 60,
    borderRadius: 14
  }
})
