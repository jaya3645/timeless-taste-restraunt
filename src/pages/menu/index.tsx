import { Card, Typography, Divider, Input, Empty } from "antd";
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
  const { Search } = Input;
  const dispatch = useDispatch();

  const allCategoriesList = useSelector(
    (state: any) => state.root.allCategoriesList
  );
  const allFavouriteList = useSelector(
    (state: any) => state.root.favoritesList
  );

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [favorites, setFavorites] = useState<any>(allFavouriteList || []);

  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: string]: boolean;
  }>({});

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

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const filteredCategoriesList = allCategoriesList?.filter((item: any) =>
    item.strCategory.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

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
              <div className="categoryMenu">
                <Title level={3}>Menu</Title>
                <Search
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  style={{ width: 200, marginLeft: "auto" }}
                  allowClear
                />
              </div>
              <Divider />

              {filteredCategoriesList.length > 0 ? (
                <div
                  className="menuList pd-10"
                  style={{
                    height:
                      filteredCategoriesList.length > 3
                        ? "calc(100vh - 200px)"
                        : "auto",
                  }}
                >
                  {filteredCategoriesList?.map((item: any, index: number) => {
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
              ) : (
                <Empty />
              )}
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default Menu;
