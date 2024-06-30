import {
  Card,
  Form,
  Input,
  Button,
  Divider,
  Typography,
  Row,
  Col,
  List,
} from "antd";
import "./index.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFeedabackList } from "redux/actions";

const AboutUs = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const allFeedbackList = useSelector((state: any) => state.root.feedbackList);

  const [feedbackList, setFeedbackList] = useState<any>(allFeedbackList || []);

  const onFinish = (values: any) => {
    setFeedbackList([...feedbackList, values]);
    form.resetFields();
  };

  useEffect(() => {
    dispatch(getAllFeedabackList(feedbackList));
  }, [dispatch, feedbackList]);

  return (
    <>
      <div className="container">
        <Card className="homeWrapper">
          <Title level={3}>About Our Restaurant</Title>
          <Divider />
          <div>
            <p>
              Welcome to our restaurant! We offer a variety of delicious dishes
              made with fresh ingredients. Our chefs are dedicated to providing
              you with the best culinary experience.
            </p>
            <p>Address: 123 Foodie Lane, Gourmet City, Flavorland</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <Divider />
          <Title level={3}>Feedback Form</Title>
          <Divider />
          <Form
            form={form}
            layout="vertical"
            disabled={false}
            onFinish={onFinish}
          >
            <Row gutter={10}>
              <Col span={12}>
                <Form.Item
                  label={<div className="fw-400 fs-14">First Name</div>}
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter First Name ",
                    },
                  ]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<div className="fw-400 fs-14">Last Name</div>}
                  name="LastName"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Last Name ",
                    },
                  ]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col span={24}>
                <Form.Item
                  label={<div className="fw-400 fs-14">Feedback</div>}
                  name="feedback"
                >
                  <TextArea />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col span={6}>
                <Button htmlType="submit" className="submit fs-20">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
          <Divider />
          <Title level={3}>Feedback List</Title>
          {/* <Divider /> */}
          <div className="feedbackList">
            <List
              dataSource={feedbackList}
              renderItem={(item: any, index) => (
                <List.Item key={index}>
                  <List.Item.Meta
                    title={item.firstName}
                    description={item.feedback}
                  />
                </List.Item>
              )}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default AboutUs;
