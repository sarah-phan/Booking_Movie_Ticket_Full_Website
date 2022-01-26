import * as ActionType from "./constant"

const initialState = {
    data: null,
    error: null,
    loading: false,
}
export const listPhongVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_PHONG_VE_REQUEST:{
            state.data = null;
            state.error = null;
            state.loading = true;
            return {...state}
        }
        case ActionType.LIST_PHONG_VE_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            return {...state}
        }
        case ActionType.LIST_PHONG_VE_SUCCESS:{
            state.data = null;
            state.error = action.payload;
            state.loading = false;
            return {...state}
        }
        default:
            return {...state};
    }
}