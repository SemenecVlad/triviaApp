import { StackActions } from "@react-navigation/native";
import React, {Component} from "react";
import {View, Text, StatusBar, Dimensions} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from "react-native-svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetCards } from "../../Actions/cardActions";
import { AnswerCard, GradientButton } from "../../Components";
import { RatingBar } from "../../Components/RatingBar";
import { CloseWhitemg } from "../../Components/SvgItems/CloseWhite";
import { UserImg } from "../../Components/SvgItems/UserImg";
import { colors } from "../../Styles/colors";
import { fonts } from "../../Styles/fonts";
import { commonStyles } from "../../Styles/styles";
import _ from "lodash";
import { resultsStyles } from "./styles";

interface IProps {
  cards: Array<any>;
  resetCards(): void;
  navigation: any;
}

const HEIGHT = Dimensions.get("window").height;

class ResultsScreen extends Component<IProps, any> {

  goToMain = () => {
    this.props.resetCards();
    this.props.navigation.dispatch(StackActions.popToTop())
  };

  renderItem = ({item}:any) => (
    <AnswerCard
      isCorrect={item.isCorrect === item.correct_answer}
      text={_.unescape(item.question)}
    />
  )

  keyExtractor = (item: any) => item.question

  render() {
    const correctAnswers: any = this.props.cards.filter((i: any) => i.isCorrect === i.correct_answer).length;
    return(
      <SafeAreaView style={commonStyles.violetWrapper}>
        <StatusBar barStyle='light-content' />
        <View style={[commonStyles.violetWrapper, {paddingHorizontal: 20, marginTop: 45, height: HEIGHT}]}>
          <TouchableOpacity onPress={this.goToMain} style={commonStyles.closeCircleWrapper}>
            <SvgXml xml={CloseWhitemg} />
          </TouchableOpacity>
          <View style={resultsStyles.row}>
            <SvgXml xml={UserImg} style={{marginRight: 10}} />
            <Text style={resultsStyles.title}>You scored </Text>
            <Text style={resultsStyles.title}><Text style={resultsStyles.correctAnswers}>{correctAnswers}</Text>/{this.props.cards.length}</Text>
          </View>
          <RatingBar correct={correctAnswers} totalQuestions={this.props.cards.length} />
          <FlatList
            keyExtractor={this.keyExtractor}
            style={{marginTop: 10, marginBottom: 40}}
            data={this.props.cards}
            renderItem={this.renderItem}
          />
          <View style={resultsStyles.bottom}>
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

const mapStateToProps = (state: any) => {
  return {
    cards: state.cards.cards,
    currentCardIndex: state.cards.currentCardIndex
  }
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    resetCards
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
