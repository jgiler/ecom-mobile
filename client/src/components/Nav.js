import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink exact to="/" className="logo">
      <img src="https://i.gifer.com/X5NN.gif" alt="chill logo" className="nav-logo" />
    </NavLink>

    <NavLink className="navbar-brand" exact to="/products">
      Products
    </NavLink>
    <NavLink className="navbar-brand" exact to="/contact">
      Contact
    </NavLink>
    {props.currentUser ? (
      <div>
        <span>
          <NavLink className="nav" to="/Admin">
            Admin
          </NavLink>
        </span>
        <span>
          <NavLink className="nav" to="/logout">
            Log Out
          </NavLink>
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
