import React from 'react';
import NumberFormat from 'react-number-format'
import { NavLink } from 'react-router-dom';

export default function DanhSachLichChieu(props) {
    const { lichChieu, id, idHeThong, idCumRapChon } = props

    const checkIsLogin = () => {
        // to={`/dang-nhap/${id}/${idHeThong}/${idCumRapChon}`}
        console.log(JSON.parse(localStorage.getItem("UserAccount")))
        if (JSON.parse(localStorage.getItem("UserAccount")) === null) {
            return (
                <NavLink to={`/dang-nhap/${id}/${idHeThong}/${idCumRapChon}`} className='btnChonLichChieu'>
                    Chọn
                </NavLink>
            )
        }
        if (JSON.parse(localStorage.getItem("UserAccount")) !== null) {
            return (
                <NavLink to={`/dat-cho/${id}/${idHeThong}/${idCumRapChon}`} className='btnChonLichChieu'>
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
                    {checkIsLogin()}
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
