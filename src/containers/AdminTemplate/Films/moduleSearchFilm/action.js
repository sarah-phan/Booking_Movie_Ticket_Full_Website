import * as ActionType from "./constants";
import { api1 } from "../../../../utils/apiUtils";

export const actSearchPhim = (tenPhim) => {
  return (dispatch) => {
    dispatch(actSearchPhimRequest());
    api1
      .get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`)
      .then((result) => {
        dispatch(actSearchPhimSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actSearchPhimFailed(error));
      });
  };
};
const actSearchPhimRequest = () => {
  return {
    type: ActionType.SEARCH_PHIM_REQUEST,
  };
};
const actSearchPhimSuccess = (data) => {
  return {
    type: ActionType.SEARCH_PHIM_SUCCESS,
    payload: data,
  };
};
const actSearchPhimFailed = (error) => {
  return {
    type: ActionType.SEARCH_PHIM_FAILED,
    payload: error,
  };
};
