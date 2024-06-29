import { Input, Menu } from "antd";
import "./index.scss";
import { type SidebarProps } from "../../../types/interfaces/propInterfaces/index";
import { ReactComponent as ExpandIcon } from "../../../assets/icons/expand.svg";
import { ReactComponent as CollapseIcon } from "../../../assets/icons/collapse.svg";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  menu,
  changeSideBar,
  setSearchValue,
  searchValue,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<any>(() => {
    const storedKeyPath = localStorage.getItem("keyPath");
    console.log("storedKeyPath", storedKeyPath);
    if (storedKeyPath) {
      try {
        const keyPathArray = [storedKeyPath.toString()];
        return keyPathArray;
      } catch (error) {
        return undefined;
      }
    } else {
      return undefined;
    }
  });

  const redirectionUrlHandler = ({ keyPath, e }: any): any => {
    console.log("keyPath", keyPath, e);
    localStorage.setItem("keyPath", keyPath[0]);
    setSelectedKeys(keyPath);
  };

  const toggleCollapse = (): any => {
    changeSideBar(!collapsed);
  };
  return (
    <>
      <div className="switch-module-icon"></div>
      <div className="filter-navigator">
        {!collapsed ? (
          <>
            <Input
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              className="filter-search"
              prefix={<SearchOutlined />}
              placeholder="Search Menu"
              // disabled={!loggedInUserDetails.admin}
            />
          </>
        ) : (
          ""
        )}
        {collapsed ? (
          <ExpandIcon onClick={toggleCollapse} />
        ) : (
          <CollapseIcon onClick={toggleCollapse} />
        )}
      </div>

      <div
        className={
          collapsed ? "sider-container-collapsed" : "side-menu-tabs-expanded"
        }
      >
        <Menu
          onClick={redirectionUrlHandler}
          mode="vertical"
          items={menu}
          selectedKeys={selectedKeys}
        />
      </div>
    </>
  );
};
export default Sidebar;
