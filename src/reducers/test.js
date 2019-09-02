import { SET_TEST, REMOVE_TEST } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TEST:
      return [...state, payload];
    case REMOVE_TEST:
      return state.filter(test => test.id !== payload);
    default:
      return state;
  }
}