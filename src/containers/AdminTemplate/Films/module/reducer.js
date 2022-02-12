import * as ActionType from "./constants";
const initialState = {
  data: null,
  error: null,
  loading: false,
};
export const deleteMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DELETE_FILM_REQUEST: {
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    }
    case ActionType.DELETE_FILM_SUCCESS: {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
      return { ...state };
    }
    case ActionType.DELETE_FILM_FAILED: {
      state.error = action.payload;
      state.data = null;
      state.loading = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
