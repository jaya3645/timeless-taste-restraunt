import { Card, Typography, Divider } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesList } from "../../redux/actions/index";
import "./index.scss";

const Menu: React.FC = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: string]: boolean;
  }>({});
  const allCategoriesList = useSelector(
    (state: any) => state.root.allCategoriesList
  );

  useEffect(() => {
    dispatch(getAllCategoriesList());
  }, [dispatch]);

  const toggleDescription = (category: string) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const onCategoryClickHandler = (category: string): any => {
    console.log("category", category);
  };

  return (
    <>
      <div className="container">
        <Card className="homeWrapper">
          <Title level={3}>Category</Title>
          <Divider />
          <div className="menuList">
            {allCategoriesList?.map((item: any) => {
              const isExpanded = expandedDescriptions[item?.strCategory];
              return (
                <>
                  <Card
                    hoverable
                    onClick={() => onCategoryClickHandler(item?.strCategory)}
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
                            : item?.strCategoryDescription.substring(0, 250) +
                              "..."}
                          <span
                            onClick={() => toggleDescription(item?.strCategory)}
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
        </Card>
      </div>
    </>
  );
};

export default Menu;
