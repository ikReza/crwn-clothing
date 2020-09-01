import * as actions from "./shopConstants";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const productCollections = () => async (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch({ type: actions.FETCH_COLLECTION_REQUEST });

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      dispatch({
        type: actions.FETCH_COLLECTION_SUCCESS,
        payload: collectionsMap,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.FETCH_COLLECTION_FAIL,
        payload: error.message,
      });
    });
};
