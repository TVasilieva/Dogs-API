import { all } from "redux-saga/effects";
import { dogsSagas } from "./breeds/sagas";

export function* rootSaga() {
  yield all([...dogsSagas]);
}
