import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../components/reducers/userSlice"; 
import "./header.css";
import Img from "../../assets/argentBankLogo.png";
function getUser(){
  let user = localStorage.getItem('user')
  if(user){
    user = JSON.parse(user);
     console.log("ok")
  }else {
    user = null;
  }
  return user;
 
}
getUser()
function Header() {
  const user = useSelector((state) => state.user.user); 
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser()); 
  };

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
        {user ? ( 
          <>
          <Link className="main-nav-item" to="/" onClick={handleLogout}>
              <i className="fa fa-user-circle"></i>
              Logout
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
