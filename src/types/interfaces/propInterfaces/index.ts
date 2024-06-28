import { ReactNode } from "react";

export interface MenuData {
  name: string;
  // breadcrumb: string;
  key: string;
  icon: ReactNode;
  //   path: string;
  //   exact: boolean;
  //   children: MenuData[];
}

export interface SidebarProps {
  collapsed: boolean;
  menu: MenuData[];
  changeSideBar: Function;
}
