import * as ActionType from "./constant"
import { api } from "../../../../utils/apiUtils"

export const actListPhongVe = (idLichChieu) => {
    return (dispatch) => {
        dispatch(actListPhongVeRequest)
        api
        .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idLichChieu}`)
        .then((result) => {
            dispatch(actListPhongVeSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actListPhongVeFailed(error))
        })
    }
}
const actListPhongVeRequest = () => {
    return{
        type: ActionType.LIST_PHONG_VE_REQUEST
    }
}
const actListPhongVeSuccess = (data) => {
    return{
        type: ActionType.LIST_PHONG_VE_SUCCESS,
        payload: data,
    }
}
const actListPhongVeFailed = (error) => {
    return {
        type: ActionType.LIST_PHONG_VE_FAILED,
        payload: error,
    }
}