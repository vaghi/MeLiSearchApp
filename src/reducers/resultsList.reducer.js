import * as types from '../constants/actionTypes/resultsListActionTypes';

const initialState = {
    resultItems: [],
    breadcrumbCategories: []
}

export const resultsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_ITEMS:
        return {
            ...state,
            resultItems: action.payload.items,
            breadcrumbCategories: action.payload.categories
        };
        default:
            return state;

    }
}
