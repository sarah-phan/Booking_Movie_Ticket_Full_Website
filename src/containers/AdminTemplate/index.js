import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "./_components/Navbar";

export default function AdminTemplate({ exact, path, component }) {
  if (localStorage.getItem("UserAdmin")) {
    return (
      <>
        {/* <NavbarAdmin /> */}
        <Route exact={exact} path={path} component={component} />
      </>
    );
  }
  //Redirect Auth
  return <Redirect to="/auth" />;
}
