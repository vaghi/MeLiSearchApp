import * as types from '../constants/actionTypes/searchBarActionTypes.js';

export const onInputChange = e => ({
  type: types.INPUT_CHANGE,
  payload: e.target.value
});
