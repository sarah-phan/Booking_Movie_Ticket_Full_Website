import { combineReducers } from "redux";
import { listBannerReducer } from "../containers/HomeTemplate/_components/Carousel/module/reducer";
import { listPhimReducer } from "./ModuleListPhim/reducer";
import { detailMovieReducer } from "../containers/HomeTemplate/DetailPhim/module/reducer";
import { listHeThongRapReducer } from "./ModuleHeThongRapChieu/DanhSachHeThongRapChieu/reducer";
import { listCumRapReducer } from "./ModuleHeThongRapChieu/DanhSachCumRapChieu/reducer";
import { listLichChieuReducer } from "../containers/HomeTemplate/MuaVeTheoPhim/DanhSachCumRapTheoPhim/LichChieuTheoPhim/module/reducer";
import { listLichChieuTheoHeThongReducer } from "../containers/HomeTemplate/RapChieuPhim/DanhSachCumRap/LichChieu/module/reducer";
import { loginReducer } from "../containers/HomeTemplate/LoginTheoPhim/Module/reducer";
import { loginTrangChuReducer } from "../containers/HomeTemplate/LoginTrangChu/module/reducer";
import { dangKyTrangChuReducer } from "../containers/HomeTemplate/DangKyTrangChu/module/reducer";
import { dangKyTheoPhimReducer } from "../containers/HomeTemplate/DangKyTheoPhim/module/reducer";
import { listPhongVeReducer } from "../containers/HomeTemplate/DatCho/module/reducer";
import { gheDangDatReducer } from "../containers/HomeTemplate/DatCho/HangGhe/module/reducer";
import { DatVeReducer } from "../containers/HomeTemplate/DatCho/ThongTinPhim/module/reducer";

//page admin
import addFilmReducer from "../containers/AdminTemplate/Films/AddNew/module/reducer";

export const rootReducer = combineReducers({
  listBannerReducer,
  listPhimReducer,
  detailMovieReducer,
  listHeThongRapReducer,
  listCumRapReducer,
  listLichChieuReducer,
  listLichChieuTheoHeThongReducer,
  loginReducer,
  loginTrangChuReducer,
  dangKyTrangChuReducer,
  dangKyTheoPhimReducer,
  listPhongVeReducer,
  gheDangDatReducer,
  DatVeReducer,
  //page admin

  addFilmReducer,
});
