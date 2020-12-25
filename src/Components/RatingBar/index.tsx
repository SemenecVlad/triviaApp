import React from "react";
import {View, StyleSheet} from "react-native";
import { SvgXml } from "react-native-svg";
import { StarOrange } from "../SvgItems/StarOrange";
import { StarViolet } from "../SvgItems/StarViolet";

interface IProps {
  correct: string | number;
  totalQuestions: number
}

export const RatingBar = (props: IProps) => {
  const totalStars = 10;
  const starsArray: Array<any> = Array(totalStars).fill({correct: false});
  let starsToRender: Array<any> = [...starsArray];
  if(+props.correct <= 10 && props.totalQuestions <= 10) {
    starsToRender = starsToRender.fill({correct: true}, 0, +props.correct)
  } else {
    let correct = +props.correct;
    let total = props.totalQuestions;
    let correctToRender = Math.round((correct/total * 100)/10);
    starsToRender = starsToRender.fill({correct: true}, 0, correctToRender)
  }
  return (
  <View style={styles.wrapper}>
    {
      starsToRender.map(((star, index) => <SvgXml key={index} xml={star.correct ? StarOrange : StarViolet} style={{marginRight: 5}} />))
    }
  </View>
)};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 40
  }
});