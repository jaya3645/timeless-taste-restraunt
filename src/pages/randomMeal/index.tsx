import { Button, Card, Divider, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFavourtiesList, getRandomMeal } from "../../redux/actions/index";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { isFavorite, toggleFavorite } from "utils/commonFunction";

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

  useEffect(() => {
    dispatch(getAllFavourtiesList(favouritesList));
  }, [dispatch, favouritesList]);

  return (
    <div className="container">
      <Card className="homeWrapper">
        <Title level={3}>Random Meal</Title>
        <Divider />
        <div className="randomMeal">
          {randomMeal.map((item: any, index: any) => {
            const isExpanded = expandedDescriptions[item?.strCategory];
            return (
              <>
                <Card key={index} hoverable bordered>
                  <div>
                    <img alt="example" src={item.strMealThumb} />
                  </div>
                  <Meta
                    title={
                      <>
                        <span>{item.strMeal}</span>
                        {isFavorite(item.idMeal, favouritesList) ? (
                          <HeartFilled
                            style={{ color: "red" }}
                            onClick={() =>
                              toggleFavorite(item, setFavouritesList)
                            }
                          />
                        ) : (
                          <HeartOutlined
                            onClick={() =>
                              toggleFavorite(item, setFavouritesList)
                            }
                          />
                        )}
                      </>
                    }
                    description={
                      <>
                        {isExpanded
                          ? item?.strInstructions
                          : item?.strInstructions.substring(0, 50) + "..."}
                        <span
                          onClick={(e) =>
                            toggleDescription(item?.strCategory, e)
                          }
                          className="toggleDescription fw-600"
                        >
                          {isExpanded ? " Show less" : " Read more"}
                        </span>
                      </>
                    }
                  />
                </Card>
                <Button onClick={() => dispatch(getRandomMeal())}>
                  Random
                </Button>
              </>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default RandomMeal;
