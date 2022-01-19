import * as ActionType from "./constants"

const initialState = {
    dataHeThongRap: null,
    errorHeThongRap: null,
    dataCumRap: null,
    errorCumRap: null,
    loading: false,
}

export const listHeThongRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_HE_THONG_RAP_REQUEST:{
            state.dataHeThongRap = null;
            state.errorHeThongRap = null;
            state.loading = true;
            return {...state}
        }
        case ActionType.LIST_HE_THONG_RAP_SUCCESS:{
            state.dataHeThongRap = action.payload;
            state.errorHeThongRap = null;
            state.loading = false;
            return {...state}
        }
        case ActionType.LIST_HE_THONG_RAP_FAILED:{
            state.errorHeThongRap = action.payload;
            state.dataHeThongRap = null;
            state.loading = false;
            return {...state}
        }
    
        default:
            return {...state};
    }
}
