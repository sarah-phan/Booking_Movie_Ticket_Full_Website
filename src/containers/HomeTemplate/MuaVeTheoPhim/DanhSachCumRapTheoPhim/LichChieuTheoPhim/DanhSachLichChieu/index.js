import React from 'react';

export default function DanhSachLichChieu(props) {
    const { lichChieu } = props
    return (
        <>
            <div className='row'>
                <div className='col-3'>
                    {new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString()}
                </div>
                <div className='col-3'>
                    {new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}
                </div>
                <div className='col-3'>
                    {lichChieu.giaVe}
                </div>
                <div className='col-3'>
                    <button className='btnChonLichChieu'>Chọn</button>
                </div>
            </div>
        </>
    );
}
