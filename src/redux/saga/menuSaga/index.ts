import { all, call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../types";
import {
  getAllCategoriesListServices,
  getCategoryMenuByCategoryNameServices,
  getRandomMealServices,
} from "../../services/menuServices";

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

export function* getCategoryMenuByCategoryNameSaga({
  type,
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const getCategoryMenuByCategoryName = yield call(
      getCategoryMenuByCategoryNameServices,
      payload
    );
    yield put({
      type: types.GET_CATEGORY_MENU_BY_CATEGORY_NAME_SUCCESS,
      response: getCategoryMenuByCategoryName,
    });
  } catch (error: any) {
    yield put({
      type: types.GET_CATEGORY_MENU_BY_CATEGORY_NAME_FAILURE,
    });
  }
}

export function* getRandomMealSaga({
  type,
  payload,
}: {
  type: string;
  payload: any;
}): Generator<any> {
  try {
    const getRandomMeal = yield call(getRandomMealServices);
    yield put({
      type: types.GET_RANDOM_MEAL_SUCCESS,
      response: getRandomMeal,
    });
  } catch (error: any) {
    yield put({
      type: types.GET_RANDOM_MEAL_FAILURE,
    });
  }
}

export function* menuSaga(): any {
  yield all([
    takeLatest(types.GET_ALL_CATEGORIES_LIST, getAllCategoriesListSaga),
  ]);
  yield all([
    takeLatest(
      types.GET_CATEGORY_MENU_BY_CATEGORY_NAME,
      getCategoryMenuByCategoryNameSaga
    ),
  ]);
  yield all([takeLatest(types.GET_RANDOM_MEAL, getRandomMealSaga)]);
}
