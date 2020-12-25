import { setCards, setDifficulty, setAmount, incrementCardIndex, resetCardIndex, setIsCorrect } from "../Reducers/cardsReducer"

export const getQuestions = (amount: string, difficulty: string) => async (dispatch: any) => {
  try {
    let cards: any = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`);
    if (cards.ok) {
      let json = await cards.json();
      let results = json.results;
      results = results.map((i: any) => {
        return {...i, isCorrect: "False"}
      });
      dispatch(setCards(results));
      return results;
    }
  } catch(e) {
    console.log("ERROR", e)
  }
}

export const changeDifficulty = (difficulty: string) => (dispatch: any) => {
  return dispatch(setDifficulty(difficulty));
}

export const changeAmount = (amount: string) => (dispatch: any) => {
  return dispatch(setAmount(amount));
}

export const nextCard = () => (dispatch: any) => {
  return dispatch(incrementCardIndex());
}

export const resetCards = () => (dispatch: any) => {
  return dispatch(resetCardIndex());
}

export const setCorrectValue = (value: string) => (dispatch: any) => {
  return dispatch(setIsCorrect(value));
}