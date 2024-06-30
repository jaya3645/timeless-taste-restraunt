import initialState from "../initialState";
import * as types from "../../types";

export default function menuReducer(
  state = initialState.root,
  action: any
): any {
  switch (action.type) {
    case types.GET_ALL_CATEGORIES_LIST:
      state = {
        ...state,
        categoryMenuByCategoryName: [],
      };
      return state;
    case types.GET_ALL_CATEGORIES_LIST_SUCCESS:
      state = {
        ...state,
        allCategoriesList: action.response.data.categories,
      };
      return state;
    case types.GET_CATEGORY_MENU_BY_CATEGORY_NAME:
      state = {
        ...state,
        categoryMenuByCategoryName: [],
      };
      return state;
    case types.GET_CATEGORY_MENU_BY_CATEGORY_NAME_SUCCESS:
      state = {
        ...state,
        categoryMenuByCategoryName: action.response.data.meals,
      };
      return state;
    case types.GET_ALL_FAVOURITES_LIST:
      state = {
        ...state,
        favoritesList: action.payload,
      };
      return state;
    case types.GET_RANDOM_MEAL:
      state = {
        ...state,
        randomMeal: [],
      };
      return state;
    case types.GET_RANDOM_MEAL_SUCCESS:
      state = {
        ...state,
        randomMeal: action.response.data.meals,
      };
      return state;
    case types.GET_ALL_FEEDBACK_LIST:
      state = {
        ...state,
        feedbackList: action.payload,
      };
      return state;

    default:
      return state;
  }
}
