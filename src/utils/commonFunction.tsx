export const toggleFavorite = (meal: any, setFunction: Function) => {
  setFunction((prev: any) =>
    prev.some((fav: any) => fav.idMeal === meal.idMeal)
      ? prev.filter((fav: any) => fav.idMeal !== meal.idMeal)
      : [...prev, meal]
  );
};

export const isFavorite = (mealId: string, getterFunction: any) =>
  getterFunction.some((fav: any) => fav.idMeal === mealId);
