import React, { useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ClickAwayListener } from "@material-ui/core";
import { useSelector } from "react-redux";

import "./cartIcon.scss";
import CustomButton from "../customButton/customButton";
import CartItem from "../cart/cartItem";

const CartIcon = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="root">
        <div onClick={handleClick} className="cart-icon">
          <ShoppingIcon className="shopping-icon" />
          <span className="item-count">0</span>
        </div>
        {open ? (
          <div className="dropdown">
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <CustomButton fullWidth>Go to checkout</CustomButton>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default CartIcon;
