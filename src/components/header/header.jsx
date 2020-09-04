import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// This is a new special syntax when importing SVG in React.
// The ReactComponent import name is special and tells Create React App that I want a React component that renders an SVG, rather than its filename.
// Read more about this React library special syntax here: https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files

import CartIcon from "../cartIcon/cartIcon";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/userActions";

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from "./header.styles";
import Toggle from "./toggle";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">sign in</OptionLink>
        )}
        <CartIcon />
      </OptionContainer>
      <Toggle />
    </HeaderContainer>
  );
};

export default Header;
