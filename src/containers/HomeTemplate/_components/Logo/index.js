import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import "./style.css"

export default function Logo() {
    const checkLogin = () => {
        if (JSON.parse(localStorage.getItem("UserAccount")) === null) {
            return (
                <>
                    <NavLink to='/dang-nhap' style={{ marginRight: 20 }}>Đăng nhập</NavLink>
                    <NavLink to='/dang-ky'>Đăng ký</NavLink>
                </>
            )
        }
        else{
            return(
                <p style={{color: "white"}}>Chào, <span>{JSON.parse(localStorage.getItem("UserAccount")).taiKhoan}</span></p>
            )
        }
    }
    return (
        <div className='header'>
            <div className='logo'>
                <div className='logoImage'>
                    {/* img là đường dẫn tuyệt đối
                    nếu ./image/Logo.png là đi từ localhost/image/... -> sai cho những trường hợp qua một trang khác
                    nếu /image/.. thì sẽ luôn đi từ localhost đi vào logo*/}
                    <img src='/image/Logo.png' width="150" />
                </div>
                <div className='webName'>
                    <h3>WAWAT</h3>
                    <p>Watch anywhere anytime</p>
                </div>
            </div>
            <div className='login'>
                {checkLogin()}
            </div>
        </div>

    )
}
