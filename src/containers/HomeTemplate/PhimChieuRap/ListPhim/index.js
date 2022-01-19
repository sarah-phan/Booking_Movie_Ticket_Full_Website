import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../TrangChu/style.css"

export default function ListPhim(props) {
    const {phim} = props
    // console.log(phim)
    return (
        <div className='col-md-4' style={{marginTop: 40}}>
            <div className="card" style={{ width: '18rem', height: "100%"}}>
                <img src={phim.hinhAnh} className="card-img-top" alt={phim.hinhAnh} />
                <div className="card-body">
                    <h5 className="card-title">
                        {phim.tenPhim}
                        <NavLink to={`/chi-tiet-phim/${phim.maPhim}`} className='detailPhim'> ...Chi tiết</NavLink>
                    </h5>
                    <NavLink to={`/mua-ve/${phim.maPhim}`} className='muaVe'>Mua vé</NavLink>
                </div>
            </div>
        </div>

    )
}
