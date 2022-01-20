import * as ActionType from "./constants"

const inistialState = {
    data: null,
    error: null,
    loading: false,
}

export const listCumRapReducer = (state = inistialState, action) => {
    switch (action.type) {
        case ActionType.LIST_CUM_RAP_REQUEST: {
            state.data = null;
            state.error = null;
            state.loading = true;
            return {...state}
        }
        case ActionType.LIST_CUM_RAP_SUCCESS: {
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            return{...state}
        }
        case ActionType.LIST_CUM_RAP_FAILED: {
            state.data = null;
            state.error = action.payload;
            state.loading = false;
            return{...state}
        }
        default:
            return{...state};
    }
}