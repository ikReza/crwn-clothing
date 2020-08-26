import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// This is a new special syntax when importing SVG in React.
// The ReactComponent import name is special and tells Create React App that I want a React component that renders an SVG, rather than its filename.
// Read more about this React library special syntax here: https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files

import "./header.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
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
            sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
