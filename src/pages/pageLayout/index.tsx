import { Divider, Layout } from "antd";
import { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./index.scss";
import Sidebar from "../../components/layouts/sideBar";
import SideNavRoutes from "../../routes";

const PageLayout: React.FC = () => {
  const { Header, Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (sidebarCollapse: any): any => {
    setCollapsed(sidebarCollapse);
  };

  const menuItem: any = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];
  return (
    <>
      <Layout className="layoutWrapper">
        <Sider
          className={collapsed ? "collapsed" : "expand"}
          theme="light"
          collapsible
          trigger={null}
          collapsed={collapsed}
          onCollapse={(value: any) => {
            setCollapsed(value);
          }}
        >
          <Sidebar
            collapsed={collapsed}
            menu={menuItem}
            changeSideBar={onCollapse}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="header">
            {/* <Breadcrumb
              key={pathParams["*"]}
              separator=">"
              routes={getBreadcrumbItem(paramsArray)}
            /> */}
            <div className="header-setting-container">
              <div className="customer-container">
                {/* <img
                  src={getApiServiceName(
                    window.location.hostname,
                    serviceNameLogoData
                  )}
                  alt="customer-logo"
                /> */}
              </div>
              <Divider type="vertical" />
              <div className="profile-container customer-container">
                <div>{/* <BellOutlined /> */}</div>
                {/* <Popover content={content}>
                  {loggedInUserDetails?.profileImage ? (
                    <img
                      style={{ width: 30 }}
                      src={loggedInUserDetails?.profileImage}
                      alt="logo"
                    />
                  ) : (
                    <UserOutlined />
                  )}
                </Popover> */}
              </div>
            </div>
          </Header>
          <Content className="site-layout-content">
            <SideNavRoutes />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default PageLayout;
