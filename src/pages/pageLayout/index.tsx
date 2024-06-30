import { Layout } from "antd";
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

  const onCollapse = (sidebarCollapse: any): any => {
    setCollapsed(sidebarCollapse);
  };

  const menuItem: any = [
    {
      key: "home",
      icon: <HomeIcon />,
      label: "Home",
      path: "/home",
    },
    {
      key: "menu",
      icon: <AppstoreOutlined />,
      label: "Menu",
      path: "/menu",
    },
    {
      key: "favourite",
      icon: <HeartOutlined />,
      label: "Favourite",
      path: "/favourite",
    },
    {
      key: "random-meal",
      icon: <SyncOutlined />,
      label: "Random Meal",
      path: "/random-meal",
    },
    {
      key: "about-us",
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
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="header">
            <div className="header-setting-container"></div>
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
