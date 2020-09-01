import * as actions from "./shopConstants";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: actions.FETCH_COLLECTION_REQUEST,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: actions.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: actions.FETCH_COLLECTION_FAIL,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch((error) => {
      dispatch(fetchCollectionsFailure(error.message));
    });
};
