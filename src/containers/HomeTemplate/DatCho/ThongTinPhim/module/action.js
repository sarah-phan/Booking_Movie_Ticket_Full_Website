import { api } from "../../../../../utils/apiUtils"
import * as ActionType from "./constant"

export const actPostDatVe = (datVe) => {
    return (dispatch) => {
        dispatch(actXacNhanRequest())
        api
        .post("QuanLyDatVe/DatVe",  datVe) // này nãy e nhầm 
        .then((result) => {
            dispatch(actXacNhanSuccess(result.data.content))
            console.log(result.data.content)
        })
        .catch((error) => {
            dispatch(actXacNhanFailed(error))
        })
    }
}

const actXacNhanRequest = () => {
    return {
        type: ActionType.XAC_NHAN_VE_REQUEST
    }
}
const actXacNhanSuccess = (data) => {
    return{
        type: ActionType.XAC_NHAN_VE_SUCCESS,
        payload: data,
    }
}
const actXacNhanFailed = (error) => {
    return{
        type: ActionType.XAC_NHAN_VE_FAILED,
        payload: error,
    }
}