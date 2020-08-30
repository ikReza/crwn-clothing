import React from "react";
import { useDispatch } from "react-redux";

import "./collectionItem.scss";
import CustomButton from "../customButton/customButton";
import { addItem } from "../../redux/cart/cartActions";

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
