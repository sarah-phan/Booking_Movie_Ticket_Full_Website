import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DanhSachLichChieu from './DanhSachLichChieu';
import { actFetchLichChieu } from './module/action';

export default function LichChieuTheoHeThong(props) {
    const { idCumRapChon, idHeThong } = props;
    const data = useSelector(state => state.listLichChieuTheoHeThongReducer.data)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(actFetchLichChieu(idHeThong))
    }, [idHeThong])

    const renderLichChieu = () => {
        return data?.map((heThong) => {
            let indexCumRap = heThong.lstCumRap.findIndex(cumRap => cumRap.maCumRap === idCumRapChon)
            return heThong.lstCumRap[indexCumRap]?.danhSachPhim.map((lichChieu, index) => {
                return(
                    <div key={index} className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby={idCumRapChon}>
                         <div className='row'>
                            <div className='col-3'>
                                <img src={lichChieu.hinhAnh} width="100%" style={{marginTop: "10px"}}/>
                            </div>
                            <div className='col-9' style={{borderBottom: "1px solid #7b3911"}}>
                                <p style={{fontSize: 25, marginTop: 12}}>{lichChieu.tenPhim}</p>
                                <DanhSachLichChieu
                                lichChieu = {lichChieu}
                                />
                            </div>
                         </div>
                    </div>
                   
                )
            })
        })
    }

    return (
        <div className="tab-content" id="nav-tabContent">
            {renderLichChieu()}
        </div>
    );
}
