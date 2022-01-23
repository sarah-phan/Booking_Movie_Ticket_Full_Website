import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
}

export const listPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_PHIM_REQUEST:{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.LIST_PHIM_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case ActionType.LIST_PHIM_FAILED:{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return{...state}
    }
}