import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

import "./style.css"
import { actDangKyTrangChu } from './module/action';
import Loading from "./../../../components/loading"

export default function DangKyTrangChu(props) {
  const error = useSelector(state => state.dangKyTrangChuReducer.error)
  const loading = useSelector(state => state.dangKyTrangChuReducer.loading)
  const dispatch = useDispatch()

  const [values, setValues] = React.useState({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDT: '',
    maNhom: 'GP01',
    hoTen: '',
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
      error && <div className='text-danger' style={{ textAlign: "center" }}>{error.response.data.content}</div>
    )
  }

  const handleSignup = (event) => {
    event.preventDefault()
    dispatch(actDangKyTrangChu(values, props.history))
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className='signup container'>
      <div className='signupImage row'>
        <div className='col-5' >
          <img src='/image/Logobrand.png' width={"100%"} style={{ marginTop: 40 }} />
        </div>
        <div className='signupForm col-7'>
          <h2>Đăng ký</h2>
          {notification()}
          <form onSubmit={handleSignup}>
            <Box className="textField" sx={{ mt: 2 }}>
              <TextField
                type="text"
                label="Tài Khoản"
                variant="standard"
                InputProps={{ endAdornment: <AccountCircle position="end"></AccountCircle> }} sx={{ width: '40ch' }}
                onChange={handleChange('taiKhoan')}
              ></TextField>
            </Box>

            <Box className="textField" sx={{ mt: 2 }} >
              <TextField
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.matKhau}
                onChange={handleChange('matKhau')}
                variant="standard"
                label="Mật Khẩu"
                InputProps={{
                  endAdornment:
                    <IconButton
                      position="end"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                }}
                sx={{ width: '40ch' }}
              />
            </Box>

            <Box className="textField" sx={{ mt: 2 }}>
              <TextField
                type="email"
                label="Email"
                variant="standard"
                InputProps={{ endAdornment: <EmailIcon position="end"></EmailIcon> }} sx={{ width: '40ch' }}
                onChange={handleChange('email')}
              ></TextField>
            </Box>

            <Box className="textField" sx={{ mt: 2 }}>
              <TextField
                type="text"
                label="Số điện thoại"
                variant="standard"
                InputProps={{ endAdornment: <PhoneAndroidIcon position="end"></PhoneAndroidIcon> }} sx={{ width: '40ch' }}
                onChange={handleChange('soDT')}
              ></TextField>
            </Box>

            <Box className="textField" sx={{ mt: 2 }}>
              <TextField
                type="text"
                label="Họ và tên"
                variant="standard"
                InputProps={{ endAdornment: <PersonIcon position="end"></PersonIcon> }} sx={{ width: '40ch' }}
                onChange={handleChange('hoTen')}
              ></TextField>
            </Box>
            <button type='submit' className='signupButton'>Đăng Ký</button>
          </form>
        </div>
      </div>
    </div>
  );
}

