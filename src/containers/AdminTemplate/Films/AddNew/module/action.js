import * as ActionType from "./constants";
import axios from "axios";
import { api } from "../../../../../utils/apiUtils";

export const actAddFilm = (formData) => {
  return (dispatch) => {
    dispatch(actAddFilmRequest());
    api
      .post("/QuanLyPhim/ThemPhimUploadHinh", formData)
      .then((result) => {
        dispatch(actAddFilmSuccess(result.data.content));
        alert("Thêm thành công");
      })
      .catch((error) => {
        dispatch(actAddFilmFailed(error));
      });
  };
};

const actAddFilmRequest = () => {
  return {
    type: ActionType.ADD_FILM_REQUEST,
  };
};
const actAddFilmSuccess = (data) => {
  return {
    type: ActionType.ADD_FILM_SUCCESS,
    payload: data,
  };
};
const actAddFilmFailed = (error) => {
  return {
    type: ActionType.ADD_FILM__FAILED,
    payload: error,
  };
};
