import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";
import { lazy } from "react";

const routesHome = [
  //Trang Chủ
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../containers/HomeTemplate/TrangChu")),
  },
  //Phim chiếu rạp
  {
    exact: false,
    path: "/phim-chieu-rap",
    component: lazy(() => import("../containers/HomeTemplate/PhimChieuRap")),
  },
  //Rạp chiếu phim
  {
    exact: false,
    path: "/rap-chieu-phim",
    component: lazy(() => import("../containers/HomeTemplate/RapChieuPhim")),
  },
  // Chi tiết phim
  {
    exact: false,
    path: "/chi-tiet-phim/:id",
    component: lazy(() => import("../containers/HomeTemplate/DetailPhim")),
  },
  // Mua vé theo phim
  {
    exact: true,
    path: "/mua-ve-theo-phim/:id",
    component: lazy(() => import("../containers/HomeTemplate/MuaVeTheoPhim")),
  },
  // Danh sách cụm rạp (lịch chiếu theo phim)
  //switch chỉ qua 1 route nên cần exact để switch ko match với route trước => exact của mua-ve-theo-phim = true
  // {
  //     exact: false,
  //     path: "/mua-ve-theo-phim/:id/danh-sach-cum-rap/:idHeThong",
  //     component: lazy(() => import ("../containers/HomeTemplate/MuaVeTheoPhim"))
  // }
];

const routesAdmin = [
  //Dashboard
  {
    exact: false,
    path: "/dashboard",
    // component: Dashboard,
    component: lazy(() => import("../containers/AdminTemplate/DashboardPage")),
  },
  //AddUserPage
  {
    exact: false,
    path: "/add-user",
    // component: AddUserPage,
    component: lazy(() => import("../containers/AdminTemplate/Users")),
  },
];
const renderRoutesHome = () => {
  return routesHome?.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};
const renderRoutesAdmin = () => {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRoutesHome, renderRoutesAdmin };
