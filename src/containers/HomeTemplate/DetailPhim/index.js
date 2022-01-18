import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { actFetchDetailMovie } from './module/action'
import Loading from '../../../components/loading';


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
    // console.log(value)

    if(loading){
        return(
            <Loading/>
        )
    }
    return (
        <div>
            <div className='trailerMovie' height="100%">
                <iframe src={data?.trailer} width="100%" height={350}>
                </iframe>
            </div>
            <div className='thongTinPhim' style={{backgroundColor: '#f6f6e9', color: "#7b3911"}}>
                <div className='row'>
                    <div className='col-4'>
                        <img src={data?.hinhAnh} alt={data?.hinhAnh} width="100%" />
                    </div>
                    <div className='col-8' style={{paddingTop: 20}}>
                        <Typography component="legend">Đánh giá</Typography>
                        <Rating name="read-only" value={parseInt(value)} readOnly  />
                        <span style={{marginLeft: 10, fontSize:20, fontWeight: 800}}>{data?.danhGia}/10</span>
                        <span style={{ display: "block", paddingTop: 15}}>Tên Phim</span>
                        <span style={{fontSize:25, fontWeight: 800}}>{data?.tenPhim}</span>
                        <span style={{ display: "block", paddingTop: 15}}>Mô tả</span>
                        <span style={{fontSize:20, fontWeight: 800}}>{data?.moTa}</span>
                        <span style={{ display: "block", paddingTop: 15 }}>Ngày khởi chiếu</span>
                        <span style={{fontSize:20, fontWeight: 800}}>{new Date(data?.ngayKhoiChieu).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
