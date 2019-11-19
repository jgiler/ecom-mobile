import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink exact to="/" className="logo">
      <img src="https://bit.ly/2TBdjIN" alt="chill logo" className="nav-logo" />
    </NavLink>

    <NavLink className="navbar-brand" exact to="/products">
      Products
    </NavLink>
    <NavLink className="navbar-brand" exact to="/contact">
      Contact
    </NavLink>
    <NavLink to="/">Home</NavLink>
    {props.currentUser ? (
      <div>
        <span>
          <NavLink to="/Admin">Admin</NavLink>
        </span>
        <span>
          <NavLink to="/logout">Log Out</NavLink>
        </span>
      </div>
    ) : (
      <div>
        <span>
          <NavLink to="/login">Log In</NavLink>
        </span>
        <span>
          <NavLink to="/signup">Sign Up</NavLink>
        </span>
      </div>
    )}
  </nav>
);

export default Nav;
