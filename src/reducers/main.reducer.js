import * as types from '../constants/mainTypes';

const initialState = {
    searchParams: '',
    resultItems: []
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_BAR_CHANGE:
            return {
                ...state,
                searchParams: action.value
            };
        case types.SEARCH_ITEMS:
            return {
                ...state,
                resultItems: action.items
            };
        default:
            return state;
    }
}
