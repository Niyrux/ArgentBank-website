import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import Img from "../../assets/argentBankLogo.png" 

function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Img}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Header;
