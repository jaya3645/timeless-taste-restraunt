import { Card, Typography, Divider } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategoriesList,
  getAllFavourtiesList,
} from "../../redux/actions/index";
import "./index.scss";
import CategoryMenuListing from "./categorymenuListing";

const Menu: React.FC = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();

  const allCategoriesList = useSelector(
    (state: any) => state.root.allCategoriesList
  );
  const allFavouriteList = useSelector(
    (state: any) => state.root.favoritesList
  );

  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [favorites, setFavorites] = useState<any>(allFavouriteList || []);

  useEffect(() => {
    dispatch(getAllCategoriesList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllFavourtiesList(favorites));
  }, [dispatch, favorites]);

  const toggleDescription = (category: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedDescriptions((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const onCategoryClickHandler = (category: string): any => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="container">
        <Card className="homeWrapper">
          {selectedCategory !== "" ? (
            <CategoryMenuListing
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ) : (
            <>
              <Title level={3}>Menu</Title>
              <Divider />
              <div className="menuList pd-10">
                {allCategoriesList?.map((item: any, index: number) => {
                  const isExpanded = expandedDescriptions[item?.strCategory];
                  return (
                    <>
                      <Card
                        hoverable
                        onClick={() =>
                          onCategoryClickHandler(item?.strCategory)
                        }
                        key={index}
                      >
                        <div className="menuList__content">
                          <div className="menuList__cardDetails">
                            <div className="circle normal-circle">
                              <img
                                src={item?.strCategoryThumb}
                                alt="menuList-image"
                              />
                              <div className={`fw-600 fs-16`}>
                                {item?.strCategory}
                              </div>
                            </div>
                            <div className="fw-400 fs-14 desc">
                              {isExpanded
                                ? item?.strCategoryDescription
                                : item?.strCategoryDescription.substring(
                                    0,
                                    250
                                  ) + "..."}
                              <span
                                onClick={(e) =>
                                  toggleDescription(item?.strCategory, e)
                                }
                                className="toggleDescription fw-600"
                              >
                                {isExpanded ? " Show less" : " Read more"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </>
                  );
                })}
              </div>
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default Menu;
