import * as types from '../constants/actionTypes/searchBarActionTypes';

const initialState = {
    searchParams: ''
}

export const searchBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INPUT_CHANGE:
            return {
                ...state,
                searchParams: action.payload
            };
        default:
            return state;
    }
}
