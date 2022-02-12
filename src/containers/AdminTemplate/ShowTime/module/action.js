import * as ActionType from "./constants";
import { api } from "../../../../utils/apiUtils";

export const actAddLichChieuMovie = (formData, history) => {
  return (dispatch) => {
    dispatch(actAddLichChieuMovieRequest());
    api
      .post(`QuanLyDatVe/TaoLichChieu`, formData)
      .then((result) => {
        dispatch(actAddLichChieuMovieSuccess(result.data.content));
        alert("Tạo Lịch Chiếu Thành Công");
        history.replace("/admin/films");
      })
      .catch((error) => {
        dispatch(actAddLichChieuMovieFailed(error));
      });
  };
};
const actAddLichChieuMovieRequest = () => {
  return {
    type: ActionType.ADD_LICHCHIEU_REQUEST,
  };
};
const actAddLichChieuMovieSuccess = (data) => {
  return {
    type: ActionType.ADD_LICHCHIEU_SUCCESS,
    payload: data,
  };
};
const actAddLichChieuMovieFailed = (error) => {
  return {
    type: ActionType.ADD_LICHCHIEU_FAILED,
    payload: error,
  };
};
