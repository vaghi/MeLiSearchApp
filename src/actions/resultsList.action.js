import * as types from '../constants/resultsListTypes.js';

export const searchItems = (params) => (dispatch) => {
    if(!params || !params.search)
        return;

    fetch( 'http://localhost:3000/api/items?q=' + params.search)
    .then( results => {
        return results.json();
    }).then(res => {
        dispatch({ type: types.SEARCH_ITEMS, barcodes: res.data });
        /*this.setState({ resultItems: data});
        this.setState({ showResults: true });*/
    });
};
