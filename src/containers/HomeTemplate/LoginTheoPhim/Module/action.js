import * as ActionType from "./constants";
import { api } from "./../../../../utils/apiUtils";

export const actLogin = (user, history) => {
    const {idLichChieu} = history.location
    return(dispatch) => {
        dispatch(actLoginRequest)
        api
        .post("/QuanLyNguoiDung/DangNhap", user)
        .then((result) => {
            if (result.data.content.maLoaiNguoiDung === "QuanTri"){
                return Promise.reject({
                    response:{
                        data:{
                            content: "Bạn không có quyền truy cập"
                        }
                    }
                })
            }
            localStorage.setItem("UserAccount", JSON.stringify(result.data.content));
            history.replace(`/dat-cho/${idLichChieu}`)
            dispatch(actLoginSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actLoginFailed(error))
        })
    }
}
const actLoginRequest = () => {
    return{
        type: ActionType.LOGIN_REQUEST
    }
}
const actLoginSuccess = (data) => {
    return{
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
    }
}
const actLoginFailed = (error) => {
    return {
        type: ActionType.LOGIN_FAILED,
        payload: error
    }
}