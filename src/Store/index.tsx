import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../Reducers/cardsReducer';
import counterReducer from '../Reducers/counterReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cards: cardsReducer
  },
});
