import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./toggle.styles.js";
import {
  SmallScreenContainer,
  Hamburger,
  MobileOptionContainer,
  MobileOptionLink,
} from "./toggle.styles.js";
import CartIcon from "../cartIcon/cartIcon.jsx";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/userActions";

const Toggle = () => {
  const [open, setOpen] = useState(false);

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <SmallScreenContainer>
      <div onClick={() => setOpen(false)}>
        <CartIcon />
      </div>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <MobileOptionContainer open={open} onClick={() => setOpen(false)}>
        <MobileOptionLink to="/shop">SHOP</MobileOptionLink>
        <MobileOptionLink to="/shop">CONTACT</MobileOptionLink>
        {currentUser ? (
          <MobileOptionLink as="div" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </MobileOptionLink>
        ) : (
          <MobileOptionLink to="/signin">sign in</MobileOptionLink>
        )}
      </MobileOptionContainer>
    </SmallScreenContainer>
  );
};

export default Toggle;
