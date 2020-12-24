import { StackActions } from "@react-navigation/native";
import React, {Component} from "react";
import {View, Text, StatusBar, StyleSheet, Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from "react-native-svg";
import { AnswerCard, GradientButton } from "../../Components";
import { RatingBar } from "../../Components/RatingBar";
import { CloseWhitemg } from "../../Components/SvgItems/CloseWhite";
import { UserImg } from "../../Components/SvgItems/UserImg";
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";
import { commonStyles } from "../../Styles/styles";

const HEIGHT = Dimensions.get("window").height;

export default class ResultsScreen extends Component<any, any> {

  goToMain = () => this.props.navigation.dispatch(StackActions.popToTop());

  render() {
    return(
      <SafeAreaView style={commonStyles.violetWrapper}>
        <StatusBar barStyle='light-content' />
        <View style={[commonStyles.violetWrapper, {paddingHorizontal: 20, marginTop: 45, height: HEIGHT}]}>
          <View style={commonStyles.closeCircleWrapper}>
            <SvgXml xml={CloseWhitemg} />
          </View>
          <View style={styles.row}>
            <SvgXml xml={UserImg} style={{marginRight: 10}} />
            <Text style={styles.title}>You scored </Text>
            <Text style={styles.title}><Text style={styles.correctAnswers}>6</Text>/10</Text>
          </View>
          <RatingBar correct={6} totalQuestions={10} />
          <ScrollView style={{marginTop: 10, marginBottom: 40}}>
            <AnswerCard
              isCorrect={true}
              text={"The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial."}
            />
            <AnswerCard
              isCorrect={false}
              text={"In “Metal Gear Solid 2”, you will see through the eyes of Psycho Mantis if you go first person during his boss fight."}
            />
            <AnswerCard
              isCorrect={true}
              text={"The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial."}
            />
            <AnswerCard
              isCorrect={false}
              text={"In “Metal Gear Solid 2”, you will see through the eyes of Psycho Mantis if you go first person during his boss fight."}
            />
            <AnswerCard
              isCorrect={true}
              text={"The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial."}
            />
            <AnswerCard
              isCorrect={false}
              text={"In “Metal Gear Solid 2”, you will see through the eyes of Psycho Mantis if you go first person during his boss fight."}
            />
            <AnswerCard
              isCorrect={true}
              text={"The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial."}
            />
            <AnswerCard
              isCorrect={false}
              text={"In “Metal Gear Solid 2”, you will see through the eyes of Psycho Mantis if you go first person during his boss fight."}
            />
          </ScrollView>
          <View style={styles.bottom}>
            <GradientButton
              text="PLAY AGAIN"
              onPress={this.goToMain}
              bgColors={[colors.lightOrange, colors.darkOrange]}
              textColor={colors.white}
              shadowColor={colors.darkOrange}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
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
