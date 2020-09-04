import React, { useEffect, useCallback, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../../components/loading/loading";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";

const CollectionOverview = lazy(() =>
  import("../../components/collectionOverview/collectionOverview")
);
const CollectionPage = lazy(() => import("../collection/collection"));

const ShopPage = ({ match }) => {
  const isFetching = useSelector(selectIsCollectionFetching);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(fetchCollectionsStart());
    return () => {};
  }, [stableDispatch]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
};

export default ShopPage;
