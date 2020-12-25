import React, {Component} from "react";
import {View, Text, StatusBar, KeyboardAvoidingView, Keyboard, Platform} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../Styles/colors";
import { SvgXml } from 'react-native-svg';
import { TriviaLogo } from "../../Components/SvgItems/TriviaLogo";
import { DifficultyImg } from "../../Components/SvgItems/DificultyImg";
import { AmountImg } from "../../Components/SvgItems/AmountImg";
import { TextInput } from "react-native-gesture-handler";
import { GradientButton, Line } from "../../Components";
import { ArrowDown } from "../../Components/SvgItems/ArrowDown";
import { commonStyles } from "../../Styles/styles";
import { connect } from "react-redux";
import { incrementNumber } from "../../Actions/counterActions";
import { bindActionCreators } from "redux";
import { getQuestions, changeAmount, changeDifficulty } from "../../Actions/cardActions";
import { startStyles } from "./styles";

interface IState {
  isKeyboardShow: boolean;
  dropdownOpen: boolean;
  difficulty: string;
}

interface IProps {
  amount: string;
  difficulty: string;
  navigation: any;
  getQuestions(amount: string, difficulty: string): any;
  changeDifficulty(val: string): void;
  changeAmount(val: string): void;
}

class StartScreen extends Component<IProps, IState> {
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

  hideKeyboard = async () => {
    Keyboard.dismiss()
  };

  goToQuestions = async () => {
    await this.props.getQuestions(this.props.amount, this.props.difficulty);
    this.props.navigation.navigate("QuestionsScreen");
  };

  setDifficultyVal = (value: string) => () => {
    this.props.changeDifficulty(value);
    this.toggleDropdown()
  }
  setAmountVal = (text: any) => {
    this.props.changeAmount(text);
  }

  render() {
    return(
      <SafeAreaView style={commonStyles.violetWrapper}>
          <StatusBar barStyle='light-content' />
          <View style={{flex: 1, backgroundColor: colors.violet, paddingHorizontal: 20}}>
            <View style={{marginTop: this.state.isKeyboardShow ? 0 : 80}}>
              <Text style={startStyles.text}>Welcome to the</Text>
              <SvgXml onPress={this.hideKeyboard} xml={TriviaLogo} style={{marginBottom: this.state.isKeyboardShow  ? -30 : -20, marginTop: -40, marginLeft: -20}} />
            </View>

            <KeyboardAvoidingView behavior={Platform.select({ios: "padding", android: undefined})} style={{flex: 1}} >
              <View style={startStyles.row}>
                <SvgXml xml={DifficultyImg} style={{marginBottom: 10}} />
                <Text style={startStyles.labelText}>Difficulty</Text>
              </View>
              <View style={{position: "relative", zIndex: 1, elevation: 1}}>
                <TouchableOpacity
                  style={[startStyles.borderedWrapper,
                    {marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between",}]
                  }
                  onPress={this.toggleDropdown}
                >
                  <Text style={[startStyles.level, {paddingHorizontal: 15}]}>{this.props.difficulty}</Text>
                  <SvgXml xml={ArrowDown} style={{marginRight: 15, transform: [{rotate: this.state.dropdownOpen ? "180deg" : "0deg"}]}} />
                </TouchableOpacity>
                {
                  this.state.dropdownOpen
                  ? (
                    <View style={[startStyles.dropdown, {top: Platform.OS === "android" ? -120 : 60}]}>
                      <TouchableOpacity style={{borderRadius: 14}} onPress={this.setDifficultyVal("easy")}>
                        <Text
                          style={[startStyles.level, {padding: 20, color: colors.black}]}
                        >
                          easy
                        </Text>
                      </TouchableOpacity>
                      <Line style={{marginHorizontal: 20}} />
                      <TouchableOpacity style={{borderRadius: 14}} onPress={this.setDifficultyVal("hard")}>
                      <Text
                        style={[startStyles.level, {padding: 20, color: colors.black}]}
                      >
                        hard
                      </Text>
                      </TouchableOpacity>
                    </View>
                  )
                  : null
                }
                
              </View>
              <View style={startStyles.row}>
                <SvgXml xml={AmountImg} style={{marginBottom: 10}} />
                <Text style={startStyles.labelText}>Amount</Text>
              </View>
              <View style={startStyles.borderedWrapper}>
                <TextInput
                  placeholder="Amount"
                  placeholderTextColor={colors.white}
                  style={startStyles.input}
                  value={this.props.amount}
                  onChangeText={this.setAmountVal}
                  keyboardType="number-pad"
                />
              </View>
            </KeyboardAvoidingView>
            {
              this.state.isKeyboardShow && Platform.OS === "android"
              ? null
              : (
                <View style={startStyles.bottom}>
                  <GradientButton
                    text="TRUE"
                    disabled={!this.props.amount}
                    onPress={this.goToQuestions}
                    bgColors={[colors.lightOrange, colors.darkOrange]}
                    textColor={colors.white}
                    shadowColor={colors.darkOrange}
                  />
                </View>
              )
            }
          </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.value,
    amount: state.cards.amount,
    difficulty: state.cards.difficulty,
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    incrementNumber,
    getQuestions,
    changeAmount,
    changeDifficulty
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen)
