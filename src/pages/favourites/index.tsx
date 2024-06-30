import { Avatar, Card, Divider, Empty, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { getAllFavourtiesList } from "redux/actions";
import { isFavorite, toggleFavorite } from "utils/commonFunction";

const Favourite: React.FC = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();

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
        <Title level={3}>Favourite</Title>
        <Divider />
        <div
          className="favouriteList pd-10"
          style={{
            height:
              allFavouriteList.length > 3 ? "calc(100vh - 200px)" : "auto",
          }}
        >
          {allFavouriteList.length > 0 ? (
            allFavouriteList.map((item: any, index: number) => {
              return (
                <Card key={index} hoverable>
                  <Meta
                    avatar={<Avatar src={item.strMealThumb} />}
                    title={item.strMeal}
                    description={
                      isFavorite(item.idMeal, favouritesList) ? (
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
                      )
                    }
                  />
                </Card>
              );
            })
          ) : (
            <Empty />
          )}
        </div>
      </Card>
    </div>
  );
};

export default Favourite;
