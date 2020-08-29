import React from "react";

import "./checkoutItem.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">
        {price * quantity}
        <sup>$</sup>
      </span>
      <div className="remove">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
