import * as ActionType from "./constants";
const initialState = {
  data: null,
  error: null,
  loading: false,
};
export const addLichChieuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_LICHCHIEU_REQUEST: {
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    }
    case ActionType.ADD_LICHCHIEU_SUCCESS: {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
      return { ...state };
    }
    case ActionType.ADD_LICHCHIEU_FAILED: {
      state.error = action.payload;
      state.data = null;
      state.loading = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
