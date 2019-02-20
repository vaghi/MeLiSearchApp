import { resultsListReducer } from './resultsList.reducer';
import { searchBarReducer } from './searchBar.reducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = {
    resultsListReducer,
    searchBarReducer
};

let reducers = (()=>{
    let reducer = { router: routerReducer };
    return Object.assign({},reducer,rootReducer);
})();

export default combineReducers(reducers);
