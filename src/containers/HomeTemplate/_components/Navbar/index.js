import React from 'react'
import { NavLink } from "react-router-dom"
import "./style.css"

export default function NavbarHome() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ padding: 0 }}>
            <div className="collapse navbar-collapse" id="navbarHome">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <NavLink
                            exact
                            activeClassName='active'
                            className="nav-link"
                            to="/"
                        >
                            Trang chủ
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName='active'
                            className="nav-link"
                            to="/phim-chieu-rap"
                        >
                            Phim Chiếu Rạp
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName='active'
                            className="nav-link"
                            to="/rap-chieu-phim"
                        >
                            Rạp Chiếu Phim
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName='active'
                            className="nav-link"
                            to="/mua-ve"
                        >
                            Mua vé
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
