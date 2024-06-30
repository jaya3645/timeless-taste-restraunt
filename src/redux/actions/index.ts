import * as types from "../types/index";

export const getAllCategoriesList = (): any => ({
  type: types.GET_ALL_CATEGORIES_LIST,
});

export const getCategoryMenuByCategoryName = (payload: any): any => ({
  type: types.GET_CATEGORY_MENU_BY_CATEGORY_NAME,
  payload: payload,
});

export const getAllFavourtiesList = (payload: any): any => ({
  type: types.GET_ALL_FAVOURITES_LIST,
  payload: payload,
});

export const getRandomMeal = (): any => ({
  type: types.GET_RANDOM_MEAL,
});

export const getAllFeedabackList = (payload: any): any => ({
  type: types.GET_ALL_FEEDBACK_LIST,
  payload: payload,
});
