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
        root: {
          ...state.root,
        },
      };
      return state;
    case types.GET_ALL_CATEGORIES_LIST_SUCCESS:
      console.log("action", action);
      state = {
        ...state,
        root: {
          ...state.root,
          allCategoriesList: action.response.data.categories,
        },
      };
      return state;
    default:
      return state;
  }
}
