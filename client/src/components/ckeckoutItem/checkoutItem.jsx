import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, clearItem, addItem } from "../../redux/cart/cartActions";

import "./checkoutItem.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;

  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10096;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10097;
        </div>
      </span>
      <span className="price">
        {price * quantity}
        <sup>$</sup>
      </span>
      <div className="remove" onClick={() => dispatch(clearItem(item))}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
