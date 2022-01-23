import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchLichChieu } from './module/action';
import { actFetchDetailMovie } from '../../../DetailPhim/module/action';
import NumberFormat from 'react-number-format'

export default function LichChieuTheoPhim(props) {
    const { idCumRapChon, id, idHeThong } = props;
    const data = useSelector(state => state.listLichChieuReducer.data)
    const dataPhim = useSelector(state => state.detailMovieReducer.data)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(actFetchLichChieu(id))
        dispatch(actFetchDetailMovie(id))
    }, [])

    const renderLichChieu = () => {
        // data là 1 object, phải vào thẳng heThongRapChieu mới là array
        const indexHeThong = data?.heThongRapChieu.findIndex(lichChieu => lichChieu.maHeThongRap === idHeThong)
        if (indexHeThong !== -1) {
            const indexCumRap = data?.heThongRapChieu[indexHeThong].cumRapChieu?.findIndex(lichChieu => lichChieu.maCumRap === idCumRapChon)
            if (indexCumRap !== -1) {
                return data?.heThongRapChieu[indexHeThong].cumRapChieu[indexCumRap].lichChieuPhim.map((lichChieu, index) => {
                    let displayContent = idCumRapChon === null ? "none" : "block"
                    return (
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby={idCumRapChon} key={index} display={displayContent}>
                            <div className='thongTinPhim row'>
                                <div className='col-4' >
                                    <img src={dataPhim?.hinhAnh} width={"100%"} />
                                </div>
                                <div className='col-8' >
                                    <p>{dataPhim?.tenPhim}</p>
                                    <p>{dataPhim?.moTa}</p>
                                </div>
                            </div>
                            <div className='row'>
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
                            <div className='row'>
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
                                    <button className='btnChonLichChieu'>Chọn</button>
                                </div>
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

        <div>
            {renderLichChieu()}
        </div>

    );
}
