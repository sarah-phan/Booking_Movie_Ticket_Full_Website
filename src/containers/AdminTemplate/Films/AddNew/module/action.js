import * as ActionType from "./constants";
import axios from "axios";
import { api1 } from "../../../../../utils/apiUtils";

export const actAddFilm = (formData, history) => {
  return (dispatch) => {
    dispatch(actAddFilmRequest());
    api1
      .post("/QuanLyPhim/ThemPhimUploadHinh", formData)
      .then((result) => {
        dispatch(actAddFilmSuccess(result.data.content));
        alert("Thêm thành công");
        history.replace("/admin/films");
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
