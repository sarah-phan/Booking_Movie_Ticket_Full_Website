import * as ActionType from "./constants"

export const datGheAction = (ghe) => {
    return{
        type: ActionType.DAT_GHE,
        ghe,
    }
}
export const huyGheAction = (ghe) => {
    return{
        type: ActionType.HUY_GHE,
        ghe,
    }
}