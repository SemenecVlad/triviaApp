import React, {Component} from "react";
import {View, Text, TouchableOpacity, StatusBar, StyleSheet, KeyboardAvoidingView, Keyboard} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";
import { SvgXml } from 'react-native-svg';
import { TriviaLogo } from "../../Components/SvgItems/TriviaLogo";
import { DifficultyImg } from "../../Components/SvgItems/DificultyImg";
import { AmountImg } from "../../Components/SvgItems/AmountImg";
import { TextInput } from "react-native-gesture-handler";
import { GradientButton, Line } from "../../Components";
import { ArrowDown } from "../../Components/SvgItems/ArrowDown";
import { commonStyles } from "../../Styles/styles";

interface IState {
  isKeyboardShow: boolean,
  dropdownOpen: boolean,
  difficulty: string
}

export default class StartScreen extends Component<any, IState> {
  keyboardDidShowListener: any = "";
  keyboardDidHideListener: any = "";

  state: IState = {
    isKeyboardShow: false,
    dropdownOpen: false,
    difficulty: "easy"
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  toggleDropdown = () => this.setState(prevState => {
    return {
      dropdownOpen: !prevState.dropdownOpen
    }
  })

  _keyboardDidShow = (): void => {
    this.setState({isKeyboardShow: true})
  }

  _keyboardDidHide = (): void => {
    this.setState({isKeyboardShow: false})
  }

  hideKeyboard = () => Keyboard.dismiss();

  goToQuestions = () => this.props.navigation.navigate("QuestionsScreen");

  render() {
    return(
      <SafeAreaView style={commonStyles.violetWrapper}>
          <StatusBar barStyle='light-content' />
          <View style={{flex: 1, backgroundColor: colors.violet, paddingHorizontal: 20}}>
            <View style={{marginTop: this.state.isKeyboardShow ? 0 : 100}}>
              <Text style={styles.text}>Welcome to the</Text>
              <SvgXml onPress={this.hideKeyboard} xml={TriviaLogo} style={{marginBottom: this.state.isKeyboardShow  ? -20 : 0, marginTop: -40}} />
            </View>
            <KeyboardAvoidingView behavior="padding" style={{flex: 1}} >
              <View style={styles.row}>
                <SvgXml xml={DifficultyImg} style={{marginBottom: 10}} />
                <Text style={styles.labelText}>Difficulty</Text>
              </View>
              <View style={{position: "relative", zIndex: 1}}>
                <TouchableOpacity
                  style={[styles.borderedWrapper,
                    {marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}]
                  }
                  onPress={this.toggleDropdown}
                >
                  <Text style={[styles.level, {paddingHorizontal: 15}]}>{this.state.difficulty}</Text>
                  <SvgXml xml={ArrowDown} style={{marginRight: 15, transform: [{rotate: this.state.dropdownOpen ? "180deg" : "0deg"}]}} />
                </TouchableOpacity>
                <View style={[styles.dropdown, {display: this.state.dropdownOpen ? "flex" : "none"}]}>
                  <Text style={[styles.level, {padding: 20, color: colors.black}]}>easy</Text>
                  <Line style={{marginHorizontal: 20}} />
                  <Text style={[styles.level, {padding: 20, color: colors.black}]}>hard</Text>
                </View>
              </View>
              <View style={styles.row}>
                <SvgXml xml={AmountImg} style={{marginBottom: 10}} />
                <Text style={styles.labelText}>Amount</Text>
              </View>
              <View style={styles.borderedWrapper}>
                <TextInput
                  placeholder="Amount"
                  placeholderTextColor={colors.white}
                  style={styles.input}
                  keyboardType="number-pad"
                />
              </View>
            </KeyboardAvoidingView>
            <View style={styles.bottom}>
              <GradientButton
                text="TRUE"
                onPress={this.goToQuestions}
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
  text: {
    fontFamily: fonts.Bold,
    textAlign: "center",
    fontSize: 26,
    color: "white"
  },
  dropdown: {position: "absolute", top: 60, left: 0, right: 0, backgroundColor: colors.white, zIndex: 2, borderRadius: 14},
  level: {
    fontFamily: fonts.Bold,
    fontSize: 13,
    color: colors.white
  },
  borderedWrapper: {height: 54, borderColor: colors.white, borderWidth: 1, borderRadius: 14},
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 13,
    fontFamily: fonts.Bold,
    paddingHorizontal: 14
  },
  labelText: {
    color: colors.lightOrange,
    fontSize: 13,
    marginLeft: 10,
    marginBottom: 10
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36
  }
})
