import React from 'react'
import CarouselHome from "../_components/Carousel"
import "./style.css"

export default function PhimChieuRap() {
    const renderPhimDangChieu = () => {

    }
    const renderPhimSapChieu = () => {

    }
    return (
        <div>
            <CarouselHome/>
            <div className='phimHot container'>
                <button 
                className='phimDangChieuButton'
                onClick={() => {
                    return(
                        <div className='row'>
                            {renderPhimDangChieu()}
                        </div>
                    )
                }}
                >
                    Phim Đang Chiếu
                </button>
                <button 
                className='phimSapChieuButton'>
                    Phim Sắp Chiếu
                </button>
                <div className='row'>
                </div>
            </div>
        </div>
    )
}
