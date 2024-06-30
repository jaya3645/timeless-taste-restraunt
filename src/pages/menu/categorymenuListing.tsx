import { Avatar, Card, Divider } from "antd";
import { CategoryMenuProps } from "../../types/interfaces/propInterfaces/index";
import {
  ArrowLeftOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryMenuByCategoryName } from "../../redux/actions/index";

const CategoryMenuListing: React.FC<CategoryMenuProps> = ({
  selectedCategory,
  setSelectedCategory,
  setFavorites,
  favorites,
}) => {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const allCategoriesList = useSelector(
    (state: any) => state.root.categoryMenuByCategoryName
  );
  useEffect(() => {
    dispatch(getCategoryMenuByCategoryName(selectedCategory));
  }, [dispatch, selectedCategory]);

  const toggleFavorite = (meal: any) => {
    setFavorites((prev: any) =>
      prev.some((fav: any) => fav.idMeal === meal.idMeal)
        ? prev.filter((fav: any) => fav.idMeal !== meal.idMeal)
        : [...prev, meal]
    );
  };

  const isFavorite = (mealId: string) =>
    favorites.some((fav: any) => fav.idMeal === mealId);

  return (
    <>
      <div className="categoryMenu">
        <ArrowLeftOutlined onClick={() => setSelectedCategory("")} />
        <div className="fs-18 fw-500">{selectedCategory}</div>
      </div>
      <Divider />
      <div className="mealList pd-10">
        {allCategoriesList?.map((item: any, index: number) => {
          return (
            <Card key={index} hoverable>
              <Meta
                avatar={<Avatar src={item.strMealThumb} />}
                title={item.strMeal}
                description={
                  isFavorite(item.idMeal) ? (
                    <HeartFilled
                      style={{ color: "red" }}
                      onClick={() => toggleFavorite(item)}
                    />
                  ) : (
                    <HeartOutlined onClick={() => toggleFavorite(item)} />
                  )
                }
              />
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default CategoryMenuListing;
