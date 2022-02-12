import * as ActionType from "./constants";
import axios from "axios";
import { api1 } from "../../../../../utils/apiUtils";
import { actFetchListPhim } from "../../../../../reducer/ModuleListPhim/action";

export const actUpdateFilm = (formData, history) => {
  return (dispatch) => {
    dispatch(actUpdateFilmRequest());
    api1
      .post("/QuanLyPhim/CapNhatPhimUpload", formData)
      .then((result) => {
        dispatch(actUpdateFilmSuccess(result.data.content));
        console.log("result", result);
        alert("Cập Nhật Film thành công");
        // console.log({ history });
        // history.replace("/admin/films");
        // call api load lai phim
        dispatch(actFetchListPhim());
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
