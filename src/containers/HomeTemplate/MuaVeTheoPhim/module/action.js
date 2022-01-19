import * as ActionType from "./constants"
import {api} from "../../../../utils/apiUtils"

export const actFetchHeThongRap = () => {
    return (dispatch) => {
        dispatch(actHeThongRapRequest)
        api
        .get("QuanLyRap/LayThongTinHeThongRap")
        .then((result) => {
            dispatch(actHeThongRapSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actHeThongRapFailed(error))
        })
    }
}
const actHeThongRapRequest = () => {
    return{
        type: ActionType.LIST_HE_THONG_RAP_REQUEST
    }
}
const actHeThongRapSuccess = (data) => {
    return{
        type: ActionType.LIST_HE_THONG_RAP_SUCCESS,
        payload: data,
    }
}
const actHeThongRapFailed = (error) => {
    return{
        type: ActionType.LIST_HE_THONG_RAP_FAILED,
        payload: error,
    }
}