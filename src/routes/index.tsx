import { Route, Routes } from "react-router-dom";

const SideNavRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={"hello"}></Route>
        <Route path="/home" element="devices"></Route>
      </Routes>
    </>
  );
};

export default SideNavRoutes;
