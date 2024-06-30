import { Avatar, Card, Divider, Empty, Input } from "antd";
import { CategoryMenuProps } from "../../types/interfaces/propInterfaces/index";
import {
  ArrowLeftOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryMenuByCategoryName } from "../../redux/actions/index";
import { isFavorite, toggleFavorite } from "utils/commonFunction";

const CategoryMenuListing: React.FC<CategoryMenuProps> = ({
  selectedCategory,
  setSelectedCategory,
  setFavorites,
  favorites,
}) => {
  const { Meta } = Card;
  const { Search } = Input;
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const allCategoriesList = useSelector(
    (state: any) => state.root.categoryMenuByCategoryName
  );
  useEffect(() => {
    dispatch(getCategoryMenuByCategoryName(selectedCategory));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const filteredCategoriesList = allCategoriesList?.filter((item: any) =>
    item.strMeal.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <>
      <div className="categoryMenu">
        <ArrowLeftOutlined onClick={() => setSelectedCategory("")} />
        <div className="fs-18 fw-500">{selectedCategory}</div>
        <Search
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          style={{ width: 200, marginLeft: "auto" }}
          allowClear
        />
      </div>
      <Divider />
      <div
        className="mealList pd-10"
        style={{
          height:
            filteredCategoriesList.length > 3 ? "calc(100vh - 200px)" : "auto",
        }}
      >
        {filteredCategoriesList.length > 0 ? (
          filteredCategoriesList?.map((item: any, index: number) => {
            return (
              <Card key={index} hoverable>
                <Meta
                  avatar={<Avatar src={item.strMealThumb} />}
                  title={item.strMeal}
                  description={
                    isFavorite(item.idMeal, favorites) ? (
                      <HeartFilled
                        style={{ color: "red" }}
                        onClick={() => toggleFavorite(item, setFavorites)}
                      />
                    ) : (
                      <HeartOutlined
                        onClick={() => toggleFavorite(item, setFavorites)}
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
    </>
  );
};

export default CategoryMenuListing;
