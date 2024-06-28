import { all, call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../types";
import { getAllCategoriesListServices } from "../../services/menuServices";

export function* getAllCategoriesListSaga({
  type,
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const allCategoriesList = yield call(getAllCategoriesListServices);
    yield put({
      type: types.GET_ALL_CATEGORIES_LIST_SUCCESS,
      response: allCategoriesList,
    });
  } catch (error: any) {
    yield put({
      type: types.GET_ALL_CATEGORIES_LIST_FAILURE,
    });
  }
}

export function* menuSaga(): any {
  yield all([
    takeLatest(types.GET_ALL_CATEGORIES_LIST, getAllCategoriesListSaga),
  ]);
}
