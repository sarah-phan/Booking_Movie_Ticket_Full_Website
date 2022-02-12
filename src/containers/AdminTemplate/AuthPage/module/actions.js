import * as ActionType from "./constants";

import { api1, api } from "../../../../utils/apiUtils";

export const actAuth = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    // axios({
    //   url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //   method: "POST",
    //   data: user,
    // })
    api1
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        //check ma loai nguoi dung
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: {
              data: {
                content: "Ban khong co quyen truy cap",
              },
            },
          });
        }
        //luu thong tin login xuong localStorage
        localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));

        //redirect qua trang Dashboard
        history.replace("/admin/films");

        dispatch(actAuthSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actAuthFailed(error));
      });
  };
};

const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (error) => {
  return {
    type: ActionType.AUTH_FAILED,
    payload: error,
  };
};
