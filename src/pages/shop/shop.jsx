import React, { useEffect, useCallback } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import CollectionPage from "../collection/collection";

import Loading from "../../components/loading/loading";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";
import { productCollections } from "../../redux/shop/shopActions";

const ShopPage = ({ match }) => {
  const isFetching = useSelector(selectIsCollectionFetching);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(productCollections());
    return () => {};
  }, [stableDispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) =>
          isFetching ? <Loading /> : <CollectionOverview {...props} />
        }
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={(props) =>
          !isCollectionsLoaded ? <Loading /> : <CollectionPage {...props} />
        }
      />
    </div>
  );
};

export default ShopPage;
