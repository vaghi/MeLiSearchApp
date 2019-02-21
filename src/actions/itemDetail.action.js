import * as types from '../constants/actionTypes/itemDetailActionTypes.js';

export const searchItem = (itemId) => (dispatch) => {
    fetch( `http://localhost:3003/api/items/${itemId}`)
        .then( results => {
            return results.json();
        }).then(res => {
            dispatch({ type: types.SEARCH_ITEM, payload: res });
        });
};
