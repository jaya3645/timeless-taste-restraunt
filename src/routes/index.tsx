import { Route, Routes } from "react-router-dom";

const SideNavRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={"hello"}></Route>
        <Route path="add-new-device" element="devices"></Route>
      </Routes>
    </>
  );
};

export default SideNavRoutes;
