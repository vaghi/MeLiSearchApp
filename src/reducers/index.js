import {resultsListReducer} from './resultsList.reducer';
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = {
    resultsListReducer
};

let reducers = (()=>{
    let reducer = { router: routerReducer };
    return Object.assign({},reducer,rootReducer);

})();
export default combineReducers(reducers);
