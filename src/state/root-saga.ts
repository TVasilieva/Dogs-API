import { all } from "redux-saga/effects";
import { breedsSagas } from "./breeds/sagas";

export function* rootSaga() {
  yield all([...breedsSagas]);
}
