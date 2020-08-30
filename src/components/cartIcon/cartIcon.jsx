import React, { useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ClickAwayListener } from "@material-ui/core";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../customButton/customButton";
import CartItem from "../cartItem/cartItem";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selector";

import "./cartIcon.scss";

const CartIcon = ({ history }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleCheckout = () => {
    setOpen(false);
    history.push("/checkout");
  };

  const cartItems = useSelector(selectCartItems);
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="root">
        <div onClick={handleClick} className="cart-icon">
          <ShoppingIcon className="shopping-icon" />
          <span className="item-count">{itemCount}</span>
        </div>
        {open ? (
          <div className="dropdown">
            <div className="cart-items">
              {cartItems.length ? (
                cartItems.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <div className="empty-cart">Your cart is empty</div>
              )}
            </div>
            <CustomButton fullWidth onClick={handleCheckout}>
              Go to checkout
            </CustomButton>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default withRouter(CartIcon);
