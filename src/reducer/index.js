import { combineReducers } from "redux";
import { listBannerReducer } from "../containers/HomeTemplate/_components/Carousel/module/reducer";
import { listPhimReducer } from "../containers/HomeTemplate/_components/ModuleRenderListPhim/reducer";
import { detailMovieReducer } from "../containers/HomeTemplate/DetailPhim/module/reducer";
import { listHeThongRapReducer } from "../containers/HomeTemplate/MuaVeTheoPhim/module/reducer";
import { listCumRapReducer } from "../containers/HomeTemplate/MuaVeTheoPhim/DanhSachCumRap/module/reducer";

export const rootReducer = combineReducers({
    listBannerReducer,
    listPhimReducer,
    detailMovieReducer,
    listHeThongRapReducer,
    listCumRapReducer,
})