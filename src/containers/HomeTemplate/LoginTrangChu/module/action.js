import * as ActionType from "./constants";
import { api } from "./../../../../utils/apiUtils";

export const actLoginTrangChu = (user, history) => {
    const {id, idHeThong, idCumRap} = history.location
    return(dispatch) => {
        dispatch(actLoginTrangChuRequest)
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
            history.push("/")
            dispatch(actLoginTrangChuSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actLoginTrangChuFailed(error))
        })
    }
}
const actLoginTrangChuRequest = () => {
    return{
        type: ActionType.LOGIN_TRANG_CHU_REQUEST
    }
}
const actLoginTrangChuSuccess = (data) => {
    return{
        type: ActionType.LOGIN_TRANG_CHU_SUCCESS,
        payload: data,
    }
}
const actLoginTrangChuFailed = (error) => {
    return {
        type: ActionType.LOGIN_TRANG_CHU_FAILED,
        payload: error
    }
}