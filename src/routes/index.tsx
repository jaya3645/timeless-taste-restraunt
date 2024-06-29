import Menu from "../pages/menu/index";
import Home from "../pages/home";
import Favourite from "../pages/favourites";
import { Route, Routes } from "react-router-dom";

const SideNavRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
    </>
  );
};

export default SideNavRoutes;
