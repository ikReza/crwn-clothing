import { all, call, takeLatest, put } from "redux-saga/effects";
import * as actions from "../user/userConstants";
import { clearCart } from "./cartActions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(actions.SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
