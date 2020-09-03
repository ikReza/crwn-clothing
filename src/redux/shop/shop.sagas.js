import { takeLatest, call, put, all } from "redux-saga/effects";
import * as actions from "./shopConstants";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
    // redux-thunk -> dispatch(), redux-saga -> put()
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(actions.FETCH_COLLECTION_REQUEST, fetchCollectionsAsync);
}
// takeEvery takes non-blocking call

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
