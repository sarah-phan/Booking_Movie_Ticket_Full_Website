import * as ActionType from "./constants"
import { api } from "../../../../utils/apiUtils"

export const actFetchListPhimHot = () => {
    return (dispatch) => {
        dispatch(actListPhimHotRequest)
        api
        .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
        .then((result) => {
            dispatch(actListPhimHotSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actListPhimHotFailed(error))
        })
    }
}
const actListPhimHotRequest = () => {
    return{
        type: ActionType.LIST_PHIM_HOT_REQUEST,
    }
}
const actListPhimHotSuccess = (data) => {
    return{
        type: ActionType.LIST_PHIM_HOT_SUCCESS,
        payload: data,
    }
}
const actListPhimHotFailed = (error) => {
    return{
        type: ActionType.LIST_PHIM_HOT_FAILED,
        payload: error,
    }
}