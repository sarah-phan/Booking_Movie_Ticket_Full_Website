import * as ActionType from "./constants"
import { api } from "../../../../utils/apiUtils"

export const actDangKyTheoPhim = (user, history) => {
    const{idLichChieu} = history.location
    return (dispatch) => {
        dispatch(actDangKyTheoPhimRequest)
        api
        .post("QuanLyNguoiDung/DangKy", user)
        .then((result) => {
            dispatch(actDangKyTheoPhimSuccess(result.data.content))
            alert("Đăng ký tài khoản thành công")
            history.replace(`/dang-nhap/${idLichChieu}`)
        })
        .catch((error) => {
            dispatch(actDangKyTheoPhimFailed(error))
        })
    }
}

const actDangKyTheoPhimRequest = () => {
    return{
        type: ActionType.SIGN_UP_THEO_PHIM_REQUEST
    }
}
const actDangKyTheoPhimSuccess = (data) => {
    return{
        type: ActionType.SIGN_UP_THEO_PHIM_SUCCESS,
        payload: data
    }
}
const actDangKyTheoPhimFailed = (error) => {
    return{
        type: ActionType.SIGN_UP_THEO_PHIM_FAILED,
        payload: error
    }
}