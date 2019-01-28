import * as types from '../constants/resultsListTypes';

const initialState = {
    resultItems: []
}

export const resultsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_ITEMS:
        return {
            ...state,
            resultItems: action.resultItems ? action.resultItems : []
        };
        default:
            return state;

    }
}
