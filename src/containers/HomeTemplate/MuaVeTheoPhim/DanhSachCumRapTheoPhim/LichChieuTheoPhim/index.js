import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DanhSachLichChieu from './DanhSachLichChieu';
import { actFetchLichChieu } from './module/action';
import { actFetchDetailMovie } from '../../../DetailPhim/module/action';

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
                    return (
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby={idCumRapChon} key={index}>
                            <DanhSachLichChieu
                                lichChieu={lichChieu}
                            />
                        </div>
                    )
                })
            }
            else{
                return(
                    <div className='thongBao'>
                    <img src='/image/Pikachu.png'/>
                    </div>
                )
            }
        }
    }

    return (
        <div className="tab-content" id="nav-tabContent">
            <div className='thongTinPhim row'>
                <div className='col-4' >
                    <img src={dataPhim?.hinhAnh} width={"100%"}/>
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
            {renderLichChieu()}
        </div>
    );
}
