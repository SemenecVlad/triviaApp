// import { useDispatch } from "react-redux";
import {
  decrement,
  increment
} from '../Reducers/counterReducer';

// These actions just for test purposes

export const incrementNumber = () => (dispatch: any) => {
  return dispatch(increment())
}

export const decrementNumber = () => (dispatch: any) => {
  return dispatch(decrement())
}
