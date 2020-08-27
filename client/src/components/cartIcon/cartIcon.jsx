import React, { useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { Popover, Typography } from "@material-ui/core";

import "./cartIcon.scss";
import CustomButton from "../customButton/customButton";

const CartIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div onClick={handleClick} className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
      <Popover
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className="popover"
      >
        <div className="cart-items">
          <Typography>Menu-1</Typography>
          <Typography>Menu-1</Typography>
          <Typography>Menu-1</Typography>
          <Typography>Menu-1</Typography>
        </div>
        <div className="checkout-btn">
          <CustomButton fullWidth>Go to checkout</CustomButton>
        </div>
      </Popover>
    </div>
  );
};

export default CartIcon;
