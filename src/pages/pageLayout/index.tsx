import { Divider, Layout } from "antd";
import { useState } from "react";
import {
  UploadOutlined,
  HeartOutlined,
  AppstoreOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import "./index.scss";
import Sidebar from "../../components/layouts/sideBar";
import SideNavRoutes from "../../routes";
import { getSideNavMenu } from "../../utils/sideMenuFunctions";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const PageLayout: React.FC = () => {
  const { Header, Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const onCollapse = (sidebarCollapse: any): any => {
    setCollapsed(sidebarCollapse);
  };

  const menuItem: any = [
    {
      key: "1",
      icon: <HomeIcon />,
      label: "Home",
      path: "/home",
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Menu",
      path: "/menu",
    },
    {
      key: "3",
      icon: <HeartOutlined />,
      label: "Favourite",
      path: "/favourite",
    },
    {
      key: "4",
      icon: <SyncOutlined />,
      label: "Random Meal",
      path: "/random-meal",
    },
    {
      key: "5",
      icon: <UploadOutlined />,
      label: "About Us",
      path: "/about-us",
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
            menu={getSideNavMenu(menuItem)}
            changeSideBar={onCollapse}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="header">
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
