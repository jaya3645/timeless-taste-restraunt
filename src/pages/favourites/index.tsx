import { Avatar, Card, Divider, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { getAllFavourtiesList } from "redux/actions";

const Favourite: React.FC = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();

  const allFavouriteList = useSelector(
    (state: any) => state.root.favoritesList
  );

  const [favouritesList, setFavouritesList] = useState(allFavouriteList);

  const toggleFavorite = (meal: any) => {
    setFavouritesList((prev: any) =>
      prev.some((fav: any) => fav.idMeal === meal.idMeal)
        ? prev.filter((fav: any) => fav.idMeal !== meal.idMeal)
        : [...prev, meal]
    );
  };

  const isFavorite = (mealId: string) =>
    favouritesList.some((fav: any) => fav.idMeal === mealId);

  useEffect(() => {
    dispatch(getAllFavourtiesList(favouritesList));
  }, [dispatch, favouritesList]);

  console.log("check", favouritesList);

  return (
    <div className="container">
      <Card className="homeWrapper">
        <Title level={3}>Favourite</Title>
        <Divider />
        <div
          className="favouriteList pd-10"
          style={{
            height:
              allFavouriteList.length > 4 ? "calc(100vh - 200px)" : "auto",
          }}
        >
          {allFavouriteList.map((item: any, index: number) => {
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
      </Card>
    </div>
  );
};

export default Favourite;
