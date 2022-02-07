import * as ActionType from "./constant"

const initialState = {
    data: null,
    error: null,
    success: false,
}

export const DatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.XAC_NHAN_VE_REQUEST:{
            state.data = null;
            state.error = null;
            state.success = false;
            return {...state}
        }
        case ActionType.XAC_NHAN_VE_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            state.success = true;
            return {...state}
        }
        case ActionType.XAC_NHAN_VE_FAILED:{
            state.data = null;
            state.error = action.payload;
            state.success = false;
            return {...state}
        }
        default:
            return {...state}
    }
}