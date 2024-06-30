import { Menu } from "antd";
import "./index.scss";
import { type SidebarProps } from "../../../types/interfaces/propInterfaces/index";
import { ReactComponent as ExpandIcon } from "../../../assets/icons/expand.svg";
import { ReactComponent as CollapseIcon } from "../../../assets/icons/collapse.svg";
import { useState } from "react";

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  menu,
  changeSideBar,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<any>(() => {
    const storedKeyPath = localStorage.getItem("keyPath");
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
          onClick={(e) => redirectionUrlHandler(e)}
          mode="vertical"
          items={menu}
          selectedKeys={selectedKeys}
        />
      </div>
    </>
  );
};
export default Sidebar;
