import { ReactNode } from "react";

export interface MenuData {
  name: string;
  key: string;
  icon: ReactNode;
  path: string;
}

export interface SidebarProps {
  collapsed: boolean;
  menu: MenuData[];
  changeSideBar: Function;
}

export interface CategoryMenuProps {
  selectedCategory: string;
  setSelectedCategory: Function;
  setFavorites: Function;
  favorites: any;
}
