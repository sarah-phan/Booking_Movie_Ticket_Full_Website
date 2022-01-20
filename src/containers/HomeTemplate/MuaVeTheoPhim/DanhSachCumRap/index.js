import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { actFetchListCumRap } from './module/action';

export default function DanhSachCumRap(props) {
    const {id} = props;
    console.log(id)
    const { data } = useSelector(state => state.listCumRapReducer.data)
    console.log(data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchListCumRap(id))
    },[])


    // const renderListCumRap = () => {
    //     return data?.map((cumRap) => {

    //     })
    // }

    return (
        <>
            <div className='col-4'>
                <div className='list-group' id='list-tab' role="tablist">
                    {/* {renderListCumRap()} */}
                </div>
            </div>
            <div className='col-8'>
                <div className="tab-content" id="nav-tabContent">
                </div>
            </div>
        </>
    );
}
