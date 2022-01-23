import * as ActionType from "./constants"
import { api } from "../../utils/apiUtils"

export const actFetchListPhim = () => {
    return (dispatch) => {
        dispatch(actListPhimRequest)
        api
        .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
        .then((result) => {
            dispatch(actListPhimSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actListPhimFailed(error))
        })
    }
}
const actListPhimRequest = () => {
    return{
        type: ActionType.LIST_PHIM_REQUEST,
    }
}
const actListPhimSuccess = (data) => {
    return{
        type: ActionType.LIST_PHIM_SUCCESS,
        payload: data,
    }
}
const actListPhimFailed = (error) => {
    return{
        type: ActionType.LIST_PHIM_FAILED,
        payload: error,
    }
}