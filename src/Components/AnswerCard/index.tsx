import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { SvgXml } from "react-native-svg";
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";
import { CheckImg } from "../SvgItems/CheckImg";
import { CloseImg } from "../SvgItems/Close";

interface IProps {
  isCorrect: boolean;
  text: string;
}

export const AnswerCard = (props: IProps) => (
  <View style={[styles.card, props.isCorrect ? styles.correct : styles.wrong]}>
    <Text style={styles.cardText}>{props.text}</Text>
    <SvgXml style={{marginHorizontal: 10}} xml={props.isCorrect ? CheckImg : CloseImg} />
  </View>
);

const styles = StyleSheet.create({
  cardText: {
    fontFamily: fonts.Regular,
    fontSize: 13,
    color: colors.violet,
    width: "90%"
  },
  card: {
    height: 70,
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 14,
    marginVertical: 10
  },
  wrong: {
    backgroundColor: colors.peach
  },
  correct: {

  }
})