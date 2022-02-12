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
  {
    exact: false,
    path: "/dang-nhap/:idLichChieu",
    component: lazy(() => import("../containers/HomeTemplate/LoginTheoPhim")),
  },
  {
    exact: false,
    path: "/dat-cho/:idLichChieu",
    component: lazy(() => import("../containers/HomeTemplate/DatCho")),
  },
  {
    exact: false,
    path: "/dang-nhap",
    component: lazy(() => import("../containers/HomeTemplate/LoginTrangChu")),
  },
  {
    exact: false,
    path: "/dang-ky",
    component: lazy(() => import("../containers/HomeTemplate/DangKyTrangChu")),
  },
  {
    exact: false,
    path: "/dang-ky-theo-phim/:idLichChieu",
    component: lazy(() => import("../containers/HomeTemplate/DangKyTheoPhim")),
  },
];

const routesAdmin = [
  //Admin
  {
    exact: false,
    path: "/admin",
    // component: Dashboard,
    component: lazy(() => import("../containers/AdminTemplate/AdminPage")),
  },
  // //User
  // {
  //   exact: false,
  //   path: "/admin/users",
  //   // component: Users
  //   component: lazy(() => import("../containers/AdminTemplate/Users")),
  // },
  // {
  //   exact: false,
  //   path: "/admin/films",
  //   // component: AddUserPage,
  //   component: lazy(() => import("../containers/AdminTemplate/Films")),
  // },
  {
    exact: true,
    path: "/admin/films/addnew",
    // component: AddUserPage,
    component: lazy(() =>
      import("../containers/AdminTemplate/Films/AddNew/AddNew.js")
    ),
  },
  {
    exact: true,
    path: "/admin/films/editfilm/:id",
    // component: AddUserPage,
    component: lazy(() =>
      import("../containers/AdminTemplate/Films/EditFilm/EditFilm.js")
    ),
  },
  {
    exact: true,
    path: "/admin/films/showtime/:id",
    // component: AddUserPage,
    component: lazy(() => import("../containers/AdminTemplate/ShowTime")),
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
