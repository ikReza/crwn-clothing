import React, { useState, useEffect, useCallback } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import CollectionPage from "../collection/collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shopActions";
import Loading from "../../components/loading/loading";

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    let unsubscribeFromSnapshot = null;

    const collectionRef = firestore.collection("collections");
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log(collectionsMap);
      stableDispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
    return () => {
      unsubscribeFromSnapshot();
    };
  }, [stableDispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) =>
          loading ? <Loading /> : <CollectionOverview {...props} />
        }
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={(props) =>
          loading ? <Loading /> : <CollectionPage {...props} />
        }
      />
    </div>
  );
};

export default ShopPage;
