import React from "react";
import { SHOP_DATA } from "./shop.data";
import CollectionPreview from "../../components/collectionPreview/collectionPreview";

const ShopPage = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
