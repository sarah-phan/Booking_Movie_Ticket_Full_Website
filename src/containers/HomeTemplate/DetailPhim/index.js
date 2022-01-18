import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { actFetchDetailMovie } from './module/action'
import "./style.css"

export default function DetailPhim(props) {
    const data = useSelector(state => state.detailMovieReducer.data)
    const loading = useSelector(state => state.detailMovieReducer.loading)
    const dispatch = useDispatch();
    // console.log(props)
    const { id } = props.match.params
    // console.log(id)
    useEffect(() => {
        dispatch(actFetchDetailMovie(id))
    }, [])

    const value = data?.danhGia || "";
    console.log(value)

    return (
        <div>
            <div className='trailerMovie' height="100%">
                <iframe src={data?.trailer} width="100%" height={350}>
                </iframe>
            </div>
            <div className='thongTinPhim'>
                <div className='row'>
                    <div className='col-4'>
                        <img src={data?.hinhAnh} alt={data?.hinhAnh} width="100%" />
                    </div>
                    <div className='col-8'>
                        <Typography component="legend" style={{fontWeight: 800}} className='danhGia'>Đánh giá</Typography>
                        <Rating name="read-only" value={parseInt(value)} readOnly className='rating' />
                        <span style={{marginLeft: 10}}>{data?.danhGia}/10</span>
                        <span style={{ display: "block", paddingTop: 15}}>Tên Phim</span>
                        <span>{data?.tenPhim}</span>
                        <span style={{ display: "block", paddingTop: 15}}>Mô tả</span>
                        <span>{data?.moTa}</span>
                        <span style={{ display: "block", paddingTop: 15 }}>Ngày khởi chiếu</span>
                        <span>{new Date(data?.ngayKhoiChieu).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
