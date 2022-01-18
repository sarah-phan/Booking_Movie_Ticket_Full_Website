import HomeTemplate from "../containers/HomeTemplate";
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
        component: lazy(() => import ("../containers/HomeTemplate/PhimChieuRap")),  
    },
    //Rạp chiếu phim
    {
        exact: false,
        path: "/rap-chieu-phim",
        component: lazy(() => import ("../containers/HomeTemplate/RapChieuPhim")),
    },
    // Mua vé theo rạp
    {
        exact: false,
        path: "/mua-ve-theo-rap",
        component: lazy(() => import ("../containers/HomeTemplate/MuaVeTheoRap")),
    },
    // Chi tiết phim
    {
        exact: false,
        path: "/chi-tiet-phim/:id",
        component: lazy(() => import ("../containers/HomeTemplate/DetailPhim")),
    },
    // Mua vé theo phim
    {
        exact: false,
        path: "/mua-ve-theo-phim/:id",
        component: lazy(() => import ("../containers/HomeTemplate/MuaVeTheoPhim"))
    }
];

export const renderRoutesHome = () => {
    return routesHome.map((route,index) => {
        return (
            <HomeTemplate
                key = {index}
                exact = {route.exact}
                path = {route.path}
                component = {route.component}
            />
        )
    })
}