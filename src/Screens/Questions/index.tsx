import React, {Component} from "react";
import {View, Text, StatusBar, StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from "react-native-svg";
import { GenericButton } from "../../Components";
import { CloseImg } from "../../Components/SvgItems/Close";
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";
import { commonStyles } from "../../Styles/styles";

export default class QuestionsScreen extends Component<any, any> {

  goToResults = () => this.props.navigation.navigate("ResultsScreen");

  render() {
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <StatusBar barStyle='light-content' />
        <View style={[commonStyles.whiteWrapper, {paddingHorizontal: 20, marginVertical: 45}]}>
          <View style={commonStyles.closeCircleWrapper}>
            <SvgXml xml={CloseImg} />
          </View>
          <Text style={[styles.categoryTitle, {marginTop: 50}]}>Entertainment: Videogames</Text>
          <Text style={styles.categoryLevel}>level 1</Text>
          <Text style={styles.categoryQuestion}>The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial</Text>
          <GenericButton
            text="TRUE"
            bgColor={colors.violet}
            textColor={colors.white}
            onPress={this.goToResults}
          />
          <GenericButton
            text="FALSE"
            onPress={this.goToResults}
            bgColor={colors.white}
            textColor={colors.violet}
            style={{borderColor: colors.violet, borderWidth: 2, marginTop: 20}}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  categoryTitle: {
    fontFamily: fonts.Bold,
    fontSize: 31,
    color: colors.violet,
    textAlign: "center",
    marginBottom: 10
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
})
