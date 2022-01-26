import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { datGheAction } from './module/action';

export default function HangGhe(props) {
    const { data } = props
    const danhSachGheDangDat = useSelector(state => state.gheDangDatReducer.danhSachGheDangDat)
    const dispatch = useDispatch()

    const renderHangGhe = () => {
        return data?.danhSachGhe.map((ghe) => {
            let cssGheChuaDatVip = ''
            let cssGheChuaDatThuong = ''
            let cssGheDangDat = ''
            let cssGheDaDat = ''
            let disable = false

            if (!ghe.daDat && ghe.loaiGhe === "Vip") {
                cssGheChuaDatVip = 'gheChuaDatVIP'
            }
            if (!ghe.daDat && ghe.loaiGhe === "Thuong") {
                cssGheChuaDatThuong = 'gheChuaDatThuong'
            }
            if (ghe.daDat) {
                cssGheDaDat = 'gheDaDat'
                disable = true
            }

            let indexGioHang = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === ghe.maGhe)
            if(indexGioHang !== -1){
                cssGheDangDat = 'gheDangDat'
            } 
            return (
                <div className='col-1' key={ghe.maGhe}>
                    <button 
                    disabled={disable}
                    className={`${cssGheChuaDatVip} ${cssGheChuaDatThuong} ${cssGheDaDat} ${cssGheDangDat}`}
                    onClick= {() => {
                        dispatch(datGheAction(ghe))
                    }}
                    >
                        {ghe.tenGhe}
                    </button>
                </div>
            )
        })
    }

    return (
        <div className='GheXemPhim row'>
            {renderHangGhe()}
        </div>
    )
}
