import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { actFetchListCumRap } from './module/action';
import Loading from '../../../../components/loading';
import LichChieuTheoPhim from './LichChieuTheoPhim';


export default function DanhSachCumRapTheoPhim(props) {
    const { idHeThong, id } = props

    const dataCumRap = useSelector(state => state.listCumRapReducer.dataCumRap)
    const loading = useSelector(state => state.listCumRapReducer.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchListCumRap(idHeThong))
    }, [idHeThong])

    const [idCumRap, setIdCumRap] = React.useState("")
    const renderLichChieu = () => {
        if (idCumRap !== null) {
            return (
                <LichChieuTheoPhim
                    idHeThong={idHeThong}
                    idCumRapChon={idCumRap}
                    id={id}
                />
            )
        }
    }

    const renderListCumRap = () => {
        return dataCumRap?.map((cumRap, index) => {
            return (
                <a
                    className="list-group-item list-group-item-action"
                    id={cumRap.maCumRap}
                    data-toggle="list"
                    aria-controls={cumRap.tenCumRap}
                    key={index}
                    onClick={() => setIdCumRap(`${cumRap.maCumRap}`)}
                >
                    {cumRap.tenCumRap}
                    <div className='diaChiCumRap'>
                        <p style={{ marginBottom: 0 }}>Địa chỉ: <span>{cumRap.diaChi}</span></p>
                    </div>
                </a>
            )
        })
    }

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div className='col-5'>
                <div className="list-group" id="list-tab" role="tablist">
                    {renderListCumRap()}
                </div>
            </div>
            <div className='col-7'>
                {renderLichChieu()}
            </div>
        </>
    );
}
