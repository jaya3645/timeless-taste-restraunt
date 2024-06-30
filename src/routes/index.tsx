import Menu from "../pages/menu/index";
import Home from "../pages/home";
import Favourite from "../pages/favourites";
import { Route, Routes } from "react-router-dom";
import RandomMeal from "pages/randomMeal";
import AboutUs from "pages/aboutUs";

const SideNavRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
        <Route path="/random-meal" element={<RandomMeal />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </>
  );
};

export default SideNavRoutes;
