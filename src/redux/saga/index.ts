import { all, fork } from "redux-saga/effects";
import { menuSaga } from "./menuSaga";

export const rootSaga = function* root(): any {
  yield all([fork(menuSaga)]);
};
