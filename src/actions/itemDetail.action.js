import * as types from '../constants/actionTypes/itemDetailActionTypes.js';
import Fetcher from '../helpers/fetcher';

const fetcher = new Fetcher();

export const searchItem = (itemId) => (dispatch) => {

    const successCallback = (res) => {
        dispatch({ type: types.SEARCH_ITEM, payload: res });
    }

    const url = `http://localhost:3003/api/items/${itemId}`;
    fetcher.get(url, successCallback)
};
