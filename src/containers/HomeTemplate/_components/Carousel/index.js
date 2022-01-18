import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Loading from '../../../../components/loading'
import { actFetchListBanner } from './module/action'

export default function CarouselHome() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.listBannerReducer.data)
    const loading = useSelector(state => state.listBannerReducer.loading)

    useEffect(() => {
        dispatch(actFetchListBanner());
    }, [])

    const renderPhimBanner = () => {
        return data?.map((movie, index) => {
            // console.log(index);
            const active = index === 0 ? ' active' : ''; // cho index 0 active mặc định
            return (
                <div className={`carousel-item${active}`} key={index}>
                    <img src={movie.hinhAnh} width="100%" height="500" className="d-block w-100" alt={movie.hinhAnh} />
                </div>
            )
        })
    }

    const load = () => {
        if (loading) {
            return (
                <Loading />
            )
        }
    }

    return (
        <>
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators bg-transparent">
                    <li data-target="#carousel" data-slide-to={0} className="active" />
                    <li data-target="#carousel" data-slide-to={1} />
                    <li data-target="#carousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    {load()}
                    {renderPhimBanner()}
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carousel" data-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carousel" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </>

    )
}
