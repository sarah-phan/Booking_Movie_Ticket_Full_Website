import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
    loading: false,
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOGIN_REQUEST:{
            state.data = null;
            state.error = null;
            state.loading = true;
            return {...state}
        }
        case ActionType.LOGIN_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            return {...state}
        }
        case ActionType.LOGIN_FAILED:{
            state.data = null;
            state.error = action.payload;
            state.loading = false;
            return {...state}
        }
        default:
            return {...state}
    }
} 