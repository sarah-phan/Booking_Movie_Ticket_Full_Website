import * as ActionType from "./constants"
// import axios from "axios"
import {api} from "../../../../../utils/apiUtils"

export const actFetchListBanner = () => {
    return (dispatch) => {
        dispatch(actListBannerRequest)
        api
        .get("QuanLyPhim/LayDanhSachBanner")
        .then((result) => {
            dispatch(actListBannerSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actListBannerFailed(error))
        })
    }
}

const actListBannerRequest = () => {
    return{
        type: ActionType.LIST_BANNER_REQUEST,
    }
}
const actListBannerSuccess = (data) => {
    return{
        type: ActionType.LIST_BANNER_SUCCESS,
        payload: data,
    }
}
const actListBannerFailed = (error) => {
    return{
        type: ActionType.LIST_BANNER_FAILED,
        payload: error,
    }
}