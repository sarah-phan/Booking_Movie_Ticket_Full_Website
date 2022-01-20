import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { actFetchHeThongRap } from './module/action';
import "./style.css"
import DanhSachCumRap from './DanhSachCumRap';

export default function MuaVeTheoPhim() {
    const dataHeThong = useSelector(state => state.listHeThongRapReducer.dataHeThongRap)
    // console.log(dataHeThong)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchHeThongRap())
    }, [])

    const [idHeThong, setIdHeThong] = React.useState("")
    // console.log(idHeThong)
    const renderDanhSachCumRap = () => {
        if (idHeThong !== "") {
            return (
                <DanhSachCumRap
                    id={idHeThong}
                />
            )
        }
    }

    const renderHeThongRap = () => {
        return dataHeThong?.map((heThong) => {
            // console.log(heThong)
            return (
                <button
                    key={heThong.maHeThongRap}
                    className='heThongRapButton'
                    onClick={() => setIdHeThong(`${heThong.maHeThongRap}`)}
                >
                    <img src={heThong.logo} />
                </button>
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
