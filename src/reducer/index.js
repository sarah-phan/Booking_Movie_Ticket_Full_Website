import { combineReducers } from "redux";
import { listBannerReducer } from "../containers/HomeTemplate/_components/Carousel/module/reducer";
import { listPhimHotReducer } from "../containers/HomeTemplate/TrangChu/module/reducer";
import { detailMovieReducer } from "../containers/HomeTemplate/DetailPhim/module/reducer";

export const rootReducer = combineReducers({
    listBannerReducer,
    listPhimHotReducer,
    detailMovieReducer,
})