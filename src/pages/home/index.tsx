import { Card, Col, Row, Image, Button } from "antd";
import "./index.scss";
import Logo from "../../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const OnMenuClickHanlder = (e: React.MouseEvent<HTMLElement>) => {
    const targetText = (e.target as HTMLElement).innerText;
    if (targetText === "Random Meal") {
      navigate("/random-meal");
    } else {
      navigate(`/${targetText.toLowerCase()}`);
    }
  };
  return (
    <>
      <div className="container">
        <Card className="homeWrapper">
          <div className="homeWrapper__Content text-center">
            <Row gutter={[24, 40]}>
              <Col span={24}>
                <Row>
                  <Col span={24}>
                    <Image src={Logo} preview={false} />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={24}>
                  <Col span={12}>
                    <Button
                      onClick={(e) => OnMenuClickHanlder(e)}
                      className="fs-20"
                    >
                      Menu
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button
                      onClick={(e) => OnMenuClickHanlder(e)}
                      className="fs-20"
                    >
                      Favourite
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row className="randomMealBtn">
                  <Col span={12}>
                    <Button
                      onClick={(e) => OnMenuClickHanlder(e)}
                      className="fs-20"
                    >
                      Random Meal
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Home;
