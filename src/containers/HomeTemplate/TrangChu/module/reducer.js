import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
}

export const listPhimHotReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_PHIM_HOT_REQUEST:{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.LIST_PHIM_HOT_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case ActionType.LIST_PHIM_HOT_FAILED:{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return{...state}
    }
}