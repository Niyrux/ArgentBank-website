import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../components/reducers/userSlice"; 
import "./header.css";
import Img from "../../assets/argentBankLogo.webp";
import { fetchUserData } from '../../components/reducers/userInfo';


function Header() {
  const user = useSelector((state) => state.user.user); 
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser()); 
  };
  const userData = useSelector(state => state.userInfo.data);
 useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
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
       {user && userData.body && userData.body.userName ? ( 
  <>
    <Link className="main-nav-item" to="/user">
      <i className="fa fa-user-circle"></i>
      {userData.body.firstName}
    </Link>
    <Link className="main-nav-item" to="/" onClick={handleLogout}>
      <i className="fa fa-sign-out"></i>
      Sign Out
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
