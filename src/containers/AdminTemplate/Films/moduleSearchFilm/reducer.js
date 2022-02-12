import * as ActionType from "./constants";

const initialState = {
  data: null,
  error: null,
};

export const searchPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SEARCH_PHIM_REQUEST: {
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.SEARCH_PHIM_SUCCESS: {
      console.log(action.payload);
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.SEARCH_PHIM_FAILED: {
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
