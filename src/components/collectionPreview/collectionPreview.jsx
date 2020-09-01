import React from "react";
import { withRouter } from "react-router-dom";

import "./collectionPreview.scss";
import CollectionItem from "../collectionItem/collectionItem";

const CollectionPreview = ({ title, items, routeName, match, history }) => {
  return (
    <div className="preview-collection">
      <div
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </div>
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

export default withRouter(CollectionPreview);
