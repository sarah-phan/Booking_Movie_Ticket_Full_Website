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
    // Mua vé
    {
        exact: false,
        path: "/mua-ve",
        component: lazy(() => import ("../containers/HomeTemplate/MuaVe")),
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