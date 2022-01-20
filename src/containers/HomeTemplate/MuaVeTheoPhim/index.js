import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { actFetchHeThongRap } from './module/action';
import "./style.css"
import DanhSachCumRapTheoPhim from './DanhSachCumRapTheoPhim';
import { NavLink } from 'react-router-dom';

export default function MuaVeTheoPhim(props) {
    const {id} = props.match.params;
    // console.log(id)
    const dataHeThong = useSelector(state => state.listHeThongRapReducer.dataHeThongRap)
    // console.log(dataHeThong)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchHeThongRap())
    }, [])

    const [isChoose, setIsChoose] = React.useState(false)
    const renderDanhSachCumRap = () => {
        if (isChoose) {
            const {idHeThong} = props.match.params
            console.log(idHeThong)
            return (
                <DanhSachCumRapTheoPhim
                idHeThong = {idHeThong}
                id = {id}
                />
            )
        }
    }

    const renderHeThongRap = () => {
        return dataHeThong?.map((heThong) => {
            // console.log(heThong)
            return (
                <NavLink
                    key={heThong.maHeThongRap}
                    className='heThongRapButton'
                    to={`/mua-ve-theo-phim/${id}/danh-sach-cum-rap/${heThong.maHeThongRap}`}
                    onClick={() => setIsChoose(true)}
                >
                    <img src={heThong.logo} />
                </NavLink>
            )
        })
    }

    return (
        <div className='heThongRap container'>
            <h2>Lịch Chiếu</h2>
            <div>
                {renderHeThongRap()}
            </div>
            <div className='cumRap row'>
            {renderDanhSachCumRap()}
            </div>
        </div>
    )
}