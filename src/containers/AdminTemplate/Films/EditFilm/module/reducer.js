import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};
const updateFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_FILM_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.UPDATE_FILM_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.UPDATE_FILM__FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default updateFilmReducer;
