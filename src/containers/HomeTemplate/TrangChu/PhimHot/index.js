import React from 'react'

export default function PhimHot(props) {
    const { phimHot } = props
    // console.log(phimHot)
    return (
        <div className='col-md-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={phimHot.hinhAnh} width="100%" className="card-img-top" alt={phimHot.hinhAnh} />
                <div className="card-body">
                    <h5 className="card-title">{phimHot.tenPhim}</h5>
                    <a href="#" className="btn btn-primary">Chi tiết</a>
                    <a href="#" className="btn btn-primary">Mua vé</a>
                </div>
            </div>
        </div>

    )
}

