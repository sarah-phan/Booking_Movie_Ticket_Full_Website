import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import "./style.css"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { actLoginTrangChu } from './module/action';

export default function LoginTrangChu(props) {
    const error = useSelector(state => state.loginTrangChuReducer.error)
    const dispatch = useDispatch()

    const [values, setValues] = React.useState({
        taiKhoan: '',
        matKhau: '',
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value
        });
        console.log(values)
    };


    const notification = () => {
        return (
            // null = false
            error && <div className='text-danger' style={{ textAlign: "center" }}>{error.response.data.content}</div>
        )
    }

    const handleLogin = (event) => {
        event.preventDefault()
        dispatch(actLoginTrangChu(values, props.history))
    }

    return (
        <div className='container'>
            <div className='loginBox row'>
                <div className='col-4' >
                    <img src='/image/Logobrand.png' width={"140%"} />
                </div>
                <div className='col-8'>
                    <h2>Đăng nhập</h2>
                    {notification()}
                    <form onSubmit={handleLogin}>
                        <Box className="textField" sx={{ display: 'flex', alignItems: 'flex-end', }}>
                            <TextField
                                type="text"
                                id="taiKhoan"
                                label="Tài Khoản"
                                variant="outlined"
                                InputProps={{ endAdornment: <AccountCircle position="end"></AccountCircle> }} sx={{ width: '40ch' }}
                                onChange={handleChange('taiKhoan')}
                            ></TextField>
                        </Box>
                        <Box className="textField" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.matKhau}
                                    onChange={handleChange('matKhau')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Mật Khẩu"
                                />
                            </FormControl>
                        </Box>
                        <button type='submit' className='dangNhapButton'>Đăng Nhập</button>
                    </form>
                    <p className='dangKy'>
                        Chưa có tài khoản? 
                        <NavLink to = {"/dang-ky"} className = "dangKyNav"> Đăng Ký</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}
