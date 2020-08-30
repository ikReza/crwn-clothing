import React from "react";

import "./collectionPreview.scss";
import CollectionItem from "../collectionItem/collectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
