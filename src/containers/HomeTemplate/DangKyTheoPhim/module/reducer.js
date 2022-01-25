import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
    loading: false,
}

export const dangKyTheoPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SIGN_UP_THEO_PHIM_REQUEST: {
            state.data = null;
            state.error = null;
            state.loading = true;
            return {...state}
        }    
        case ActionType.SIGN_UP_THEO_PHIM_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            return {...state}
        }
        case ActionType.SIGN_UP_THEO_PHIM_FAILED:{
            state.data = null;
            state.error = action.payload;
            state.loading = false;
            return {...state}
        }
        default:
            return{...state}
    }
}