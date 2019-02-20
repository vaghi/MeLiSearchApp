import * as types from '../constants/actionTypes/resultsListActionTypes.js';

export const searchItems = (params) => (dispatch) => {
    if(!params)
        return;

    fetch( 'http://localhost:3003/api/items?q=' + params)
    .then( results => {
        return results.json();
    }).then(res => {
        dispatch({ type: types.SEARCH_ITEMS, payload: res });
    });
};
