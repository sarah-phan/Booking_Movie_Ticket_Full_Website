import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import CarouselHome from "../_components/Carousel"
import "./style.css"

import Loading from '../../../components/loading'
import {actFetchListPhim } from "./../../../reducer/ModuleListPhim/action";
import ListPhimDangChieu from './ListPhimDangChieu'
import ListPhimSapChieu from './ListPhimSapChieu'

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
        return data?.map((phimDangChieu) => {
            if (phimDangChieu.dangChieu) {
                return (
                    <ListPhimDangChieu
                        key={phimDangChieu.maPhim}
                        phim={phimDangChieu}
                    />

                )
            }
        })
    }
    const renderPhimSapChieu = () => {
        return data?.map((phimSapChieu) => {
            if (phimSapChieu.sapChieu) {
                return (
                    <ListPhimSapChieu
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
