import { useDispatch } from "react-redux";
import {
  decrement,
  increment
} from '../Reducers/counterReducer';

const dispatch = useDispatch();

export const incrementNumber = () => dispatch(increment());

export const decrementNumber = () => dispatch(decrement());
