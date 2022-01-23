import React from 'react';
import NumberFormat from 'react-number-format'

export default function DanhSachLichChieu(props) {
    const { lichChieu } = props
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
                        <button className='btnChonLichChieu'>Chọn</button>
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
