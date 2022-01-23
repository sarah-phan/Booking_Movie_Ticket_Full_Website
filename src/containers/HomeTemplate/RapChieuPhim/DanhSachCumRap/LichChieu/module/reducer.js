import * as ActionType from "./constant"

const initialState = {
    data: null,
    error: null,
    loading: false,
}

export const listLichChieuTheoHeThongReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_LICH_CHIEU_REQUEST:{
            state.data = null;
            state.error = null;
            state.loading = true;
            return {...state}
        }
        case ActionType.LIST_LICH_CHIEU_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            return {...state}
        }    
        case ActionType.LIST_LICH_CHIEU_FAILED:{
            state.error = action.payload;
            state.data = null;
            state.loading = false;
            return {...state}
        } 
        default:
            return {...state}
    }
}