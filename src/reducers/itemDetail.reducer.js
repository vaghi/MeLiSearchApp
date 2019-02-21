import * as types from '../constants/actionTypes/itemDetailActionTypes';

const initialState = {
    itemData: null,
    breadcrumbCategories: []
}

export const itemDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_ITEM:
            return {
                ...state,
                itemData: action.payload
            }
        default:
            return state;

    }
}
