import React, {Component} from "react";
import {View, Text, StatusBar} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from "react-native-svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GenericButton, ProgressBar } from "../../Components";
import { CloseImg } from "../../Components/SvgItems/Close";
import { colors } from "../../Styles/colors";
import { commonStyles } from "../../Styles/styles";
import { nextCard, setCorrectValue } from "../../Actions/cardActions";
import _ from "lodash";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { questionStyles } from "./styles";

interface IProps {
  currentCardIndex: number;
  cards: Array<any>;
  navigation: any;
  totalCards: string;
  nextCard(): void;
  setCorrectValue(val: string): void;
}

class QuestionsScreen extends Component<IProps, any> {

  onNext = () => {
    if (this.props.currentCardIndex === this.props.cards.length - 1) {
      this.props.navigation.navigate("ResultsScreen");
    } else {
      this.props.nextCard();
    } 
  };

  goToResults = () => {
    this.props.navigation.navigate("ResultsScreen")
  };

  onTrue = () => {
    this.props.setCorrectValue("True")
    this.onNext();
  }

  onFalse = () => {
    this.props.setCorrectValue("False");
    this.onNext();
  }

  render() {
    let {cards, currentCardIndex, totalCards} = this.props;
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <StatusBar barStyle='light-content' />
        <View style={[commonStyles.whiteWrapper, {paddingHorizontal: 20, marginTop: 45}]}>
          <TouchableOpacity onPress={this.goToResults} style={commonStyles.closeCircleWrapper}>
            <SvgXml xml={CloseImg} />
          </TouchableOpacity>
          <ScrollView style={{marginBottom: 80}}>
            <Text style={[questionStyles.categoryTitle, {marginTop: 30}]}>{cards[currentCardIndex].category}</Text>
            <Text style={questionStyles.categoryLevel}>level 1</Text>
            <Text style={[questionStyles.categoryLevel, {textAlign: "left", marginTop: 20}]}>
              <Text style={questionStyles.correctAnswers}>{currentCardIndex + 1}</Text>/{totalCards}
            </Text>
            <ProgressBar current={currentCardIndex + 1} total={+totalCards} />
            <Text style={[questionStyles.categoryQuestion,]}>
              {_.unescape(cards[currentCardIndex].question)}
            </Text>
          </ScrollView>
          <View style={questionStyles.bottom}>
            <GenericButton
              text="TRUE"
              bgColor={colors.violet}
              textColor={colors.white}
              onPress={this.onTrue}
            />
            <GenericButton
              text="FALSE"
              onPress={this.onFalse}
              bgColor={colors.white}
              textColor={colors.violet}
              style={{borderColor: colors.violet, borderWidth: 2, marginTop: 10}}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    cards: state.cards.cards,
    totalCards: state.cards.amount,
    currentCardIndex: state.cards.currentCardIndex
  }
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    nextCard,
    setCorrectValue
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsScreen);
