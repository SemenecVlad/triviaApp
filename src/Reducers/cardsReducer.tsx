import { createSlice } from '@reduxjs/toolkit';

interface IState {
  cards: Array<any>;
  currentCardIndex: number;
  difficulty: string;
  amount: string;
}

const initialState: IState = {
  cards: [],
  difficulty: "easy",
  amount: "10",
  currentCardIndex: 0,
}

export const cardsReducer = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    incrementCardIndex: state => {
      state.currentCardIndex = ++state.currentCardIndex
    },
    resetCardIndex: state => {
      state.currentCardIndex = 0
    },
    setCards: (state, action) => {
      state.cards = [...action.payload];
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload
    },
    setAmount: (state, action) => {
      state.amount = action.payload
    },
    setIsCorrect: (state, action) => {
      state.cards[state.currentCardIndex] = {...state.cards[state.currentCardIndex], isCorrect: action.payload}
    },
  },
});

export const { setCards , setAmount, setDifficulty, incrementCardIndex, resetCardIndex, setIsCorrect} = cardsReducer.actions;

export default cardsReducer.reducer;
