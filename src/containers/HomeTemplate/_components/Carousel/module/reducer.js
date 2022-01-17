import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
    loading: false,
}

export const listBannerReducer = (state=initialState, action) => {
    switch (action.type){
        case ActionType.LIST_BANNER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.LIST_BANNER_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case ActionType.LIST_BANNER_FAILED:{
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}