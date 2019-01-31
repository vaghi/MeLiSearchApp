import * as types from '../constants/mainTypes.js';

export const handleSearch = (params) => (dispatch) => {
    if(!params || !params.search)
        return;

    fetch( 'http://localhost:3000/api/items?q=' + params.search)
    .then( results => {
        return results.json();
    }).then(res => {
        dispatch({ type: types.SEARCH_ITEMS, barcodes: res.data });
    });
};

export const handleSearchBarChange = (value) => (dispatch) => {
    dispatch({type: types.SEARCH_BAR_CHANGE, payload: value});
}
