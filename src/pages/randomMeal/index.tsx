import { Card, Divider, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFavourtiesList, getRandomMeal } from "../../redux/actions/index";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const RandomMeal = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();

  const randomMeal = useSelector((state: any) => state.root.randomMeal);

  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    dispatch(getRandomMeal());
  }, [dispatch]);

  const toggleDescription = (category: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedDescriptions((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

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

  return (
    <div className="container">
      <Card className="homeWrapper">
        <Title level={3}>Favourite</Title>
        <Divider />
        <div className="randomMeal">
          {randomMeal.map((item: any, index: any) => {
            const isExpanded = expandedDescriptions[item?.strCategory];
            return (
              <Card
                key={index}
                hoverable
                cover={
                  <img
                    alt="example"
                    src={item.strMealThumb}
                    height={300}
                    width={200}
                  />
                }
              >
                <Meta
                  title={
                    <>
                      <span>{item.strMeal}</span>
                      {isFavorite(item.idMeal) ? (
                        <HeartFilled
                          style={{ color: "red" }}
                          onClick={() => toggleFavorite(item)}
                        />
                      ) : (
                        <HeartOutlined onClick={() => toggleFavorite(item)} />
                      )}
                    </>
                  }
                  description={
                    <>
                      {isExpanded
                        ? item?.strInstructions
                        : item?.strInstructions.substring(0, 150) + "..."}
                      <span
                        onClick={(e) => toggleDescription(item?.strCategory, e)}
                        className="toggleDescription fw-600"
                      >
                        {isExpanded ? " Show less" : " Read more"}
                      </span>
                    </>
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

export default RandomMeal;
