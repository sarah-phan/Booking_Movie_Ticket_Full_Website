import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarAdmin() {
  return (
    <nav className="navbar navbar-expand-md  navbar-dark">
      {/* Brand */}
      {/* Toggler/collapsibe Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar">
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/admin/films"
            >
              Films
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/admin/users"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
