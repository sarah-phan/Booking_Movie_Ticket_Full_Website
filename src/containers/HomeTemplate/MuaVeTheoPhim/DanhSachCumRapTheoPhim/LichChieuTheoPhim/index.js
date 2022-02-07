import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchLichChieu } from './module/action';
import { actFetchDetailMovie } from '../../../DetailPhim/module/action';
import NumberFormat from 'react-number-format'
import { NavLink } from 'react-router-dom';

export default function LichChieuTheoPhim(props) {
    const { idCumRapChon, id, idHeThong } = props;
    const data = useSelector(state => state.listLichChieuReducer.data)
    const dataPhim = useSelector(state => state.detailMovieReducer.data)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(actFetchLichChieu(id))
        dispatch(actFetchDetailMovie(id))
    }, [])

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
    const renderLichChieu = () => {
        // data là 1 object, phải vào thẳng heThongRapChieu mới là array
        const indexHeThong = data?.heThongRapChieu.findIndex(lichChieu => lichChieu.maHeThongRap === idHeThong)
        if (indexHeThong !== -1) {
            const indexCumRap = data?.heThongRapChieu[indexHeThong].cumRapChieu?.findIndex(lichChieu => lichChieu.maCumRap === idCumRapChon)
            if (indexCumRap !== -1) {
                return data?.heThongRapChieu[indexHeThong].cumRapChieu[indexCumRap].lichChieuPhim.map((lichChieu, index) => {
                    return (
                        <div className='row' key={index}>
                            <div className='col-3'>
                                <p>{new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString()}</p>
                            </div>
                            <div className='col-3'>
                                <p>{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</p>
                            </div>
                            <div className='col-3'>
                                <NumberFormat value={lichChieu.giaVe} suffix='VND' thousandSeparator={true} displayType='text' />
                            </div>
                            <div className='col-3'>
                                {checkIsLogin(lichChieu.maLichChieu)}
                            </div>
                        </div>
                    )
                })
            }
            if (indexCumRap === -1) {
                return (
                    <div className='thongBao'>
                        <img src='/image/Pikachu.png' />
                    </div>
                )
            }

        }

    }

    return (
        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby={idCumRapChon}>
            <div className='thongTinPhim row'>
                <div className='col-4' >
                    <img src={dataPhim?.hinhAnh} width={"100%"} />
                </div>
                <div className='col-8' >
                    <p>{dataPhim?.tenPhim}</p>
                    <p style={{ fontWeight: "normal" }}>{dataPhim?.moTa}</p>
                </div>
            </div>
            <div className='row' style={{ fontWeight: "normal" }}>
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
            {renderLichChieu()}
        </div>

    );
}
