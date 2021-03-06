import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { auth } from "../../firebase/firebase";
import { ReactComponent as Logo } from "../../Components/asset/crown.svg";
import {connect } from 'react-redux'
const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps =(state) =>({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
