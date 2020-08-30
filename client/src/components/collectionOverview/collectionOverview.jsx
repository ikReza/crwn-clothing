import React from "react";
import { useSelector } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collectionPreview/collectionPreview";

import "./collectionOverview.scss";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
