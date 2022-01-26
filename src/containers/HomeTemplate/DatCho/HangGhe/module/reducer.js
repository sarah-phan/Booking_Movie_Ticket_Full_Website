import * as ActionType from "./constants"

const initialState = {
    danhSachGheDangDat: [
    ]
}

export const gheDangDatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.DAT_GHE:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.maGhe === action.ghe.maGhe)
            if (index !== -1){
                danhSachGheDangDatUpdate.splice(index,1)
            }
            else{
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return {...state}
        }
        case ActionType.HUY_GHE:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.maGhe === action.ghe.maGhe)
            if (index !== -1){
                danhSachGheDangDatUpdate.splice(index,1)
            }
            else{
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return {...state}
        }

        default:
            return {...state}

    }
}