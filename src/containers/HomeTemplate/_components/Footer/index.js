import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"

export default function FooterHome() {
    return (
        <div className='footerHome'>
            <div className='footerContent container' style={{ paddingTop: 25 }}>
                <div className='row'>
                    <div className='col-4'>
                        <img src='/image/Logo.png' width="65%" />
                    </div>
                    <div className='col-4'>
                        <ul>
                            <li>
                                <NavLink exact to={"/"}> Trang chủ </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/phim-chieu-rap"}> Phim chiếu rạp </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/rap-chieu-phim"}> Rạp chiếu phim </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <ul>
                            <li>
                                <p>Điều khoản sử dụng</p>
                            </li>
                            <li>
                                <p>Hotline: <a href='tel: (+84)982937190'>(+84)982937190</a></p>
                            </li>
                            <li>
                                <p>Email: <a href='mailto: wawatwebsite@gmail.com'>wawatwebsite@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div>
                <p className='copyright'>Copyright. All rights reserved</p>
            </div>
        </div>

    )
}
