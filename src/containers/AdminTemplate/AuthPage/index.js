import React, { useState } from "react";
import { actAuth } from "./module/actions";
import { connect, useSelector, useDispatch } from "react-redux";

function AuthPage(props) {
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  // console.log(state);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(props);
    dispatch(actAuth(state, props.history));
  };

  const noti = () => {
    return (
      error && (
        <div className="alert alert-danger"> {error.response.data.content}</div>
      )
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h3>AuthPage</h3>
          {noti()}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnchange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// const MapstateToProps = (state) => {
//   return {
//     loading: state.authReducer.loading,
//     error: state.authReducer.error,
//   };
// };

// const MapDispatchToProps = (dispatch) => {
//   return {
//     login: (user) => {
//       dispatch(actAuth(user));
//     },
//   };
// };
export default AuthPage;
