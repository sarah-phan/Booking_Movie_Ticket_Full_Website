import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PhimHot(props) {
    const { phimHot } = props
    // console.log(phimHot)
    return (
        <div className='col-md-4' style={{marginTop: 40}}>
            <div className="card" style={{ width: '18rem', height: "100%"}}>
                <img src={phimHot.hinhAnh} className="card-img-top" alt={phimHot.hinhAnh} />
                <div className="card-body">
                    <h5 className="card-title">
                        {phimHot.tenPhim}
                        <NavLink to={`/chi-tiet-phim/${phimHot.maPhim}`} className='detailPhim'> ...Chi tiết</NavLink>
                    </h5>
                    <NavLink to={`/mua-ve-theo-phim/${phimHot.maPhim}`} className='muaVe'>Mua vé</NavLink>
                </div>
            </div>
        </div>

    )
}

