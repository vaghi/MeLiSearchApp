import * as types from '../constants/mainTypes.js';

export const handleSearch = (params) => {
    /*if(!params || !params.search)
        return;*/

    const res = {
        data: [{asd:"asd"},{dsa:"dsa"}]
    };

    return {
      type: types.SEARCH_ITEMS,
      payload: res
    }

    //dispatch({ type: types.SEARCH_ITEMS, items: res.data });

    /*fetch( 'http://localhost:3000/api/items?q=' + params.search)
    .then( results => {
        return results.json();
    }).then(res => {
        dispatch({ type: types.SEARCH_ITEMS, items: res.data });
    });*/
};

export const handleSearchBarChange = e => ({
  type: types.SEARCH_BAR_CHANGE,
  payload: e.target.value
});
