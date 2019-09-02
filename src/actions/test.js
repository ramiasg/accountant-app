import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';


export const setTest = msg => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, id }
  });
};