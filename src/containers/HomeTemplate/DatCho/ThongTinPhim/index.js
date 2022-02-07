import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { huyGheAction } from '../HangGhe/module/action';

import { actPostDatVe } from "./module/action"
export default function ThongTinPhim(props) {
    const { data, idLichChieu } = props
    const danhSachGheDangDat = useSelector(state => state.gheDangDatReducer.danhSachGheDangDat)
    const dataDatVe = useSelector(state => state.DatVeReducer.data)
    const dispatch = useDispatch()

    const renderChoNgoi = () => {
        return danhSachGheDangDat?.map((gheDangDat, index) => {
            return (
                <span
                    className='mt-2'
                    key={index}
                    style={{ display: "block" }}>
                    {gheDangDat.tenGhe}
                </span>
            )
        })
    }

    const renderGiaVe = () => {
        return danhSachGheDangDat?.map((gheDangDat) => {
            return (
                <>
                    <span key={gheDangDat.maGhe} style={{ display: "block" }} className='mt-2'>
                        <NumberFormat
                            value={gheDangDat.giaVe}
                            thousandSeparator={true}
                            suffix='VND'
                            displayType='text'
                        />
                    </span>
                </>
            )
        })
    }

    const renderButtonHuy = () => {
        return danhSachGheDangDat?.map((gheDangDat, index) => {
            return (
                <button
                    key={index}
                    className='btn btn-danger buttonHuy'
                    style={{ display: "block" }}
                    onClick={() => {
                        dispatch(huyGheAction(gheDangDat))
                    }}
                >
                    x
                </button>
            )
        })
    }

    const renderTongTien = () => {
        return danhSachGheDangDat.reduce((tongTien, gheDangDat) => {
            return tongTien += gheDangDat.giaVe
        }, 0)
    }

    const postDatVe = () => {
        // if (danhSachGheDangDat.daDat === false) {
        const danhSachVe = danhSachGheDangDat.map(ghe => {
            return { maGhe: ghe.maGhe, giaVe: ghe.giaVe }
        })
        const datVe = {
            maLichChieu: idLichChieu,
            danhSachVe: danhSachVe,
            // [{
            // danhSachGheDangDat là array nên ko thể .maGhe hay .giaVe được
            // maGhe: danhSachGheDangDat.maGhe,
            // giaVe: danhSachGheDangDat.giaVe
            // }]
        }
        dispatch(actPostDatVe(datVe))
        // }

    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className='thongTinPhim'>
            <div className='tenPhim'>
                <h4>{data?.thongTinPhim.tenPhim}</h4>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <p>Tên cụm rạp</p>
                    <span>{data?.thongTinPhim.tenCumRap}</span>
                </div>
                <div className='col-6'>
                    <p>Địa chỉ</p>
                    <span>{data?.thongTinPhim.diaChi}</span>
                </div>
                <div className='col-6'>
                    <p>Ngày chiếu</p>
                    <span>{data?.thongTinPhim.ngayChieu}</span>
                </div>
                <div className='col-6'>
                    <p>Giờ chiếu</p>
                    <span>{data?.thongTinPhim.gioChieu}</span>
                </div>
                <div className='col-6'>
                    <p>Tên rạp</p>
                    <span>{data?.thongTinPhim.tenRap}</span>
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4'>
                            <p>Chỗ ngồi</p>
                            {renderChoNgoi()}
                        </div>
                        <div className='col-4'>
                            <p>Giá vé</p>
                            {renderGiaVe()}
                        </div>
                        <div className='col-4'>
                            <p>Huỷ</p>
                            {renderButtonHuy()}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ borderBottom: "2px solid black", marginTop: 30 }}></div>
            <div className='row'>
                <div className='col-6'>
                    <p>Tổng Cộng</p>
                </div>
                <div className='col-6'>
                    <h4 style={{ marginTop: 20, paddingLeft: "50%" }}><NumberFormat value={renderTongTien()} thousandSeparator={true} displayType='text' suffix='VND' /></h4>
                </div>
            </div>
            <div>
                <button
                    className='submitLink'
                    onClick={() => {
                        postDatVe()
                    }}
                    type="button" data-toggle="modal" data-target="#exampleModal"
                >
                    Đặt
                </button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button onClick={() => {
                                    refreshPage()
                                }} 
                                className="close" 
                                data-dismiss="modal" 
                                aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body" style={{textAlign: "center"}}>
                                {dataDatVe}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
