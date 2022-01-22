import * as ActionType from "./constants"

const initialState = {
    dataCumRap: null,
    errorCumRap: null,
    loading: false,
}

export const listCumRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_CUM_RAP_REQUEST: {
            state.dataCumRap = null;
            state.errorCumRap = null;
            state.loading = true;
            return {...state}
        }
        case ActionType.LIST_CUM_RAP_SUCCESS: {
            state.dataCumRap = action.payload;
            state.errorCumRap = null;
            state.loading = false;
            return{...state}
        }
        case ActionType.LIST_CUM_RAP_FAILED: {
            state.dataCumRap = null;
            state.errorCumRap = action.payload;
            state.loading = false;
            return{...state}
        }
        default:
            return{...state};
    }
}