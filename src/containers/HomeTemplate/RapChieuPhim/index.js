import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchHeThongRap } from '../../../reducer/ModuleHeThongRapChieu/DanhSachHeThongRapChieu/action';
import "./style.css"
import DanhSachCumRap from './DanhSachCumRap';
import  Loading from "../../../components/loading"

export default function MuaVeTheoPhim(props) {
    const {id} = props.match.params;
    const dataHeThong = useSelector(state => state.listHeThongRapReducer.dataHeThongRap)
    const loading = useSelector(state => state.listHeThongRapReducer.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchHeThongRap())
        
    }, [])

    const [idHeThong, setIdHeThong] = React.useState("BHDStar")
    
    const renderDanhSachCumRap = () => {
        if (idHeThong !== null) {
            return (
                <DanhSachCumRap
                idHeThong = {idHeThong}
                />
            )
        }
    }

    if (loading){
        return <Loading/>
    }
    
    const renderHeThongRap = () => {
        return dataHeThong?.map((heThong) => {
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

    if(loading){
        <Loading/>
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