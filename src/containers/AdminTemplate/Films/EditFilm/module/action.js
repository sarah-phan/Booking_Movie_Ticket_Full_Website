import * as ActionType from "./constants";
import axios from "axios";
import { api } from "../../../../../utils/apiUtils";

export const actUpdateFilm = (formData, history) => {
  return (dispatch) => {
    dispatch(actUpdateFilmRequest());
    api
      .post("/QuanLyPhim/CapNhatPhimUpload", formData)
      .then((result) => {
        dispatch(actUpdateFilmSuccess(result.data.content));
        alert("Cập Nhật Film thành công");
        // console.log({ history });
        history.replace("/admin/films");
      })
      .catch((error) => {
        dispatch(actUpdateFilmFailed(error));
      });
  };
};

const actUpdateFilmRequest = () => {
  return {
    type: ActionType.UPDATE_FILM_REQUEST,
  };
};
const actUpdateFilmSuccess = (data) => {
  return {
    type: ActionType.UPDATE_FILM_SUCCESS,
    payload: data,
  };
};
const actUpdateFilmFailed = (error) => {
  return {
    type: ActionType.UPDATE_FILM__FAILED,
    payload: error,
  };
};
