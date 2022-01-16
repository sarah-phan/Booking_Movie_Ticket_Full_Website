import React from 'react'
import "./style.css"

export default function Logo() {
    return (
        <div className='header'>
            <div className='logo'>
                <div className='logoImage'>
                    <img src='./image/Logo.png' width="150" />
                </div>
                <div className='webName'>
                    <h3>WAWAT</h3>
                    <p>Watch anywhere anytime</p>
                </div>
            </div>
            <div className='login'>
                <a href='#' style={{marginRight: 20}}>Đăng nhập</a>
                <a href='#'>Đăng ký</a>
            </div>
        </div>

    )
}
