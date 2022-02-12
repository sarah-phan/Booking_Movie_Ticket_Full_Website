import * as ActionType from "./constants";
import { api1 } from "../../../../utils/apiUtils";

export const actFetchDeleteMovie = (id, history) => {
  return (dispatch) => {
    dispatch(actFetchDeleteMovieRequest());
    api1
      .delete(`QuanLyPhim/XoaPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actFetchDeleteMovieSuccess(result.data.content));
        alert("Delete Film Success");
        history.replace("/admin/films");
      })
      .catch((error) => {
        dispatch(actFetchDeleteMovieFailed(error));
      });
  };
};
const actFetchDeleteMovieRequest = () => {
  return {
    type: ActionType.DELETE_FILM_REQUEST,
  };
};
const actFetchDeleteMovieSuccess = (data) => {
  return {
    type: ActionType.DELETE_FILM_SUCCESS,
    payload: data,
  };
};
const actFetchDeleteMovieFailed = (error) => {
  return {
    type: ActionType.DELETE_FILM_FAILED,
    payload: error,
  };
};
