import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { actFetchListCumRap } from './module/action';
import Loading from '../../../../components/loading';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';

export default function DanhSachCumRapTheoPhim(props) {
    const { idHeThong, id } = props

    const dataCumRap = useSelector(state => state.listCumRapReducer.data)
    const loading = useSelector(state => state.listCumRapReducer.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchListCumRap(idHeThong))
    }, [idHeThong])

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const renderListCumRap = () => {
        return dataCumRap?.map((cumRap, index) => {
            return (
                <List>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary={cumRap.tenCumRap} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </List>
            )
        })
    }

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div className='col-12'>
                {renderListCumRap()}
            </div>
        </>
    );
}
