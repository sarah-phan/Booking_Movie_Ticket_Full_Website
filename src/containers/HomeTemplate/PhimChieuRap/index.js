import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import CarouselHome from "../_components/Carousel"
import "./style.css"

import ListPhim from './ListPhim'
import Loading from '../../../components/loading'
import {actFetchListPhim } from "./../../../reducer/ModuleListPhim/action";

export default function PhimChieuRap() {
    const data = useSelector(state => state.listPhimReducer.data)
    const loading = useSelector(state => state.listPhimReducer.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchListPhim())
    }, [])

    //do onclick chỉ gọi ko render lại component nên phải dùng useState để render lại
    const [status, setStatus] = React.useState("dangChieu")
    const renderComponent = () => {
        return (
            <div className='row'>
                {status === 'dangChieu' ? renderPhimDangChieu() : renderPhimSapChieu()}
            </div>
        )
    }

    const renderPhimDangChieu = () => {
        // console.log(123)
        return data?.map((phimDangChieu) => {
            if (phimDangChieu.dangChieu) {
                // console.log(phimDangChieu.dangChieu)
                return (
                    <ListPhim
                        key={phimDangChieu.maPhim}
                        phim={phimDangChieu}
                    />

                )
            }
        })
    }
    const renderPhimSapChieu = () => {
        // console.log(456)
        return data?.map((phimSapChieu) => {
            if (phimSapChieu.sapChieu) {
                // console.log(phimSapChieu.sapChieu)
                return (
                    <ListPhim
                        key={phimSapChieu.maPhim}
                        phim={phimSapChieu}
                    />

                )
            }
        })
    }

    if(loading){
        return(
            <Loading/>
        )
    }

    return (
        <div>
            <CarouselHome />
            <div className='phimChieuRap container'>
                <div className='phimChieuRapButton'>
                    <button
                        className='phimDangChieuButton'
                        onClick={() => setStatus("dangChieu")}>
                        Phim Đang Chiếu
                    </button>
                    <button
                        className='phimSapChieuButton'
                        onClick={() => setStatus("sapChieu")}>
                        Phim Sắp Chiếu
                    </button>
                </div>
                {renderComponent()}
            </div>
        </div>
    )
}
