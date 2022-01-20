import { api } from "../../../../../utils/apiUtils"
import * as ActionType from "./constants"

export const actFetchListCumRap = (id) => {
    return (dispatch) => {
        dispatch(actListCumRapRequest())
        api
        .get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`)
        .then((result) => {
            dispatch(actListCumRapSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actListCumRapFailed(error))
        })
    }
}

const actListCumRapRequest = () => {
    return{
        type: ActionType.LIST_CUM_RAP_REQUEST
    }
}
const actListCumRapSuccess = (data) => {
    return{
        type: ActionType.LIST_CUM_RAP_SUCCESS,
        payload: data,
    }
}
const actListCumRapFailed = (error) => {
    return{
        type: ActionType.LIST_CUM_RAP_FAILED,
        payload: error,
    }
}