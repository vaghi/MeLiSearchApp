import * as types from '../constants/mainTypes';

const initialState = {
    searchParams: '',
    resultItems: [],
    redirectToItem: false
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_BAR_CHANGE:
            return {
                ...state,
                searchParams: action.payload
            };
        case types.SEARCH_ITEMS:
            return {
                ...state,
                resultItems: action.payload.data,
                redirectToItem: true
            };
        default:
            return state;
    }
}
