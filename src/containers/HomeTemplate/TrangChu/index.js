import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import CarouselHome from '../_components/Carousel'
import "./style.css"
import { actFetchListPhim } from '../../../reducer/ModuleListPhim/action'
import PhimHot from './PhimHot'

export default function TrangChu() {
    const data = useSelector(state => state.listPhimReducer.data)
    // console.log(data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchListPhim())
    }, [])

    const renderListPhimHot = () => {
        // console.log(123)
        return data?.map((phimHot) => {
            if (phimHot.hot) {
                // console.log(phimHot)
                return (
                    <PhimHot
                        key={phimHot.maPhim}
                        phimHot={phimHot}
                    />
                )
            }
        })
    }
    return (
        <div>
            <CarouselHome />
            <div className='phimHot container'>
                <div className='phimHotTitle'>Phim Hot</div>
                <div className='row'>
                    {renderListPhimHot()}
                </div>
            </div>
        </div>
    )
}
