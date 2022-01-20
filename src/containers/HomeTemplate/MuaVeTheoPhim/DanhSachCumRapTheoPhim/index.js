import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { actFetchListCumRap } from './module/action';
import { data } from 'jquery';

export default function DanhSachCumRapTheoPhim(props) {
    // console.log(props)
    const {idHeThong, id} = props
    // console.log(idHeThong, id)

    const dataCumRap = useSelector(state => state.listCumRapReducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchListCumRap(idHeThong))
    }, [])
    console.log(dataCumRap)

    const renderListCumRap = () => {
        return dataCumRap?.map((cumRap, index) => {
            return(
                <a key={index} className="list-group-item list-group-item-action" id={cumRap.maCumRap} data-toggle="list" href="..." role="tab" aria-controls={cumRap.tenCumRap}>{cumRap.tenCumRap}</a>
            )
        })
    }
    return (
        <>
            <div className='col-4'>
                <div className='list-group' id='list-tab' role="tablist">
                    {renderListCumRap()}
                </div>
            </div>
            <div className='col-8'>
                <div className="tab-content" id="nav-tabContent">
                    
                </div>
            </div>
        </>
    );
}
