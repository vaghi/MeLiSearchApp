import * as types from '../constants/mainTypes.js';

export const handleSearch = (params, history) => (dispatch) => {

    fetch( 'http://localhost:3003/api/items?q=' + params)
        .then(response => response.json())
        .then(res => {
            dispatch({ type: types.SEARCH_ITEMS, payload: res });
            history.push("/items?q=params");
        });
};

export const handleSearchBarChange = e => ({
  type: types.SEARCH_BAR_CHANGE,
  payload: e.target.value
});
