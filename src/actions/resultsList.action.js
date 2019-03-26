import * as types from '../constants/actionTypes/resultsListActionTypes.js';
import Fetcher from '../helpers/fetcher';

const fetcher = new Fetcher();

export const searchItems = (params) => (dispatch) => {
    if(!params)
        return;

    const successCallback = (res) => {
        dispatch({ type: types.SEARCH_ITEMS, payload: res });
    }

    const url = `http://localhost:3003/api/items?q=${params}`;
    fetcher.get(url, successCallback)
};
