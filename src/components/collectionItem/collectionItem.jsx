import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cartActions";

import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  NameContainer,
  PriceContainer,
  AddButton,
} from "./collectionItem.styles";

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <Image imageUrl={imageUrl} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooter>
      <AddButton inverted="true" onClick={() => dispatch(addItem(item))}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
