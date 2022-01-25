import * as ActionType from "./constants"
import { api } from "../../../../utils/apiUtils"

export const actDangKyTrangChu = (user, history) => {
    return (dispatch) => {
        dispatch(actDangKyTrangChuRequest)
        api
        .post("QuanLyNguoiDung/DangKy", user)
        .then((result) => {
            dispatch(actDangKyTrangChuSuccess(result.data.content))
            alert("Đăng ký thành công")
            history.replace("/")
        })
        .catch((error) => {
            dispatch(actDangKyTrangChuFailed(error))
        })
    }
}

const actDangKyTrangChuRequest = () => {
    return{
        type: ActionType.SIGN_UP_TRANG_CHU_REQUEST
    }
}
const actDangKyTrangChuSuccess = (data) => {
    return{
        type: ActionType.SIGN_UP_TRANG_CHU_SUCCESS,
        payload: data
    }
}
const actDangKyTrangChuFailed = (error) => {
    return{
        type: ActionType.SIGN_UP_TRANG_CHU_FAILED,
        payload: error
    }
}