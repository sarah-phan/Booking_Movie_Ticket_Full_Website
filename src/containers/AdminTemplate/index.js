import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "./_components/Navbar";

export default function AdminTemplate({ exact, path, component }) {
  return (
    <>
      <NavbarAdmin />
      <Route exact={exact} path={path} component={component} />
    </>
  );
}
