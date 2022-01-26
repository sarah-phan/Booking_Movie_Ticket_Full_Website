import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./style.css"
import { actListPhongVe } from './module/action';
import Loading from "../../../components/loading"
import { Redirect } from 'react-router-dom';
import HangGhe from './HangGhe';
import ThongTinPhim from './ThongTinPhim';

export default function DatCho(props) {
  const { idLichChieu } = props.match.params
  const data = useSelector(state => state.listPhongVeReducer.data)
  const loading = useSelector(state => state.listPhongVeReducer.loading)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(actListPhongVe(idLichChieu))
  }, [])

  const renderGhe = () => {
    return (
      <HangGhe
        data={data}
      />
    )
  }

  const renderThongTinPhim = () => {
    return (
      <ThongTinPhim
        data={data}
        idLichChieu = {idLichChieu}
      />
    )
  }
  if (JSON.parse(localStorage.getItem("UserAccount")) === null) {
    return <Redirect to={`/dang-nhap/${idLichChieu}`} />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <div className='choNgoi'>
        <div className=' container'>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div className='screen'>
              <h3 className='text'>Màn hình</h3>
            </div>
          </div>
          {renderGhe()}
        </div>
        <div style={{ borderBottom: "3px solid #7b3911", margin: "15px 0" }}></div>
        <div className='chuThich container'>
          <div className='row'>
            <div className='col-6'>
              <div className='row'>
                <div className='gheVipChuThich'></div>
                <span className='chuThichGhe'>Ghế Vip</span>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='gheThuongChuThich'></div>
                <span className='chuThichGhe'>Ghế Thường</span>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='gheDaDatChuThich'></div>
                <span className='chuThichGhe'>Ghế đã đặt</span>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='gheDangDatChuThich'></div>
                <span className='chuThichGhe'>Ghế đang đặt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='thongTinVe container'>
        {renderThongTinPhim()}
        
      </div>
      
    </>
  );
}
