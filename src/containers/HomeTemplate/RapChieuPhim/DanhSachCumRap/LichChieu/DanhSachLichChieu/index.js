import React from 'react';
import NumberFormat from 'react-number-format'
import { NavLink } from 'react-router-dom';

export default function DanhSachLichChieu(props) {
    const { lichChieu } = props

    const checkIsLogin = (maLichChieu) => {
        if (JSON.parse(localStorage.getItem("UserAccount")) === null) {
            return (
                <NavLink to={`/dang-nhap/${maLichChieu}`} className='btnChonLichChieu'>
                    Chọn
                </NavLink>
            )
        }
        if (JSON.parse(localStorage.getItem("UserAccount")) !== null) {
            return (
                <NavLink to={`/dat-cho/${maLichChieu}`} className='btnChonLichChieu'>
                    Chọn
                </NavLink>
            )
        }
    }

    const renderDanhSachLichChieu = () => {
        return lichChieu.lstLichChieuTheoPhim.map((lichChieuPhim) => {
            return (
                <>
                    <div className='col-3'>
                        <p>{new Date(lichChieuPhim.ngayChieuGioChieu).toLocaleDateString()}</p>
                    </div>
                    <div className='col-3'>
                        <p>{new Date(lichChieuPhim.ngayChieuGioChieu).toLocaleTimeString()}</p>
                    </div>
                    <div className='col-3'>
                        <NumberFormat value={lichChieuPhim.giaVe} displayType='text' suffix='VND' thousandSeparator={true}/>
                    </div>
                    <div className='col-3'>
                    {checkIsLogin(lichChieuPhim.maLichChieu)}
                    </div>
                </>
            )
        })
    }
    return (
        <>
            <div className='row' style={{fontWeight:"normal", fontSize: 16}}>
                <div className='col-3'>
                    Ngày chiếu
                </div>
                <div className='col-3'>
                    Giờ chiếu
                </div>
                <div className='col-3'>
                    Giá vé
                </div>
            </div>
            <div className='row' style={{fontSize: 16}}>
                {renderDanhSachLichChieu()}
            </div>
        </>
    );
}
