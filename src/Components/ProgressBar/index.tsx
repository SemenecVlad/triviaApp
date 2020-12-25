import { current } from "@reduxjs/toolkit";
import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import { colors } from "../../Styles/colors";

interface IProps {
  current: number;
  total: number;
}

const WIDTH = Dimensions.get("window").width - 40;
const HEIGHT = 6;

export const ProgressBar = (props: IProps) => {
  let correctToRender = Math.round((props.current/props.total * WIDTH) - 37);
  return (
  <View style={styles.main}>
    <View style={[styles.progress, {width: (WIDTH/10) + correctToRender}]} />
  </View>
)};

const styles = StyleSheet.create({
  main: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: colors.lightViolet,
    borderRadius: 5,
    marginTop: 10,
  },
  progress: {
    height: HEIGHT,
    backgroundColor: colors.darkOrange,
    borderTopLeftRadius: HEIGHT/2,
    borderBottomLeftRadius: HEIGHT/2
  }
})