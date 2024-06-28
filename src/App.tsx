import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategoriesList } from "./redux/actions";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./pages/pageLayout";
import SideNavRoutes from "./routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesList());
  }, [dispatch]);
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/*" element={<SideNavRoutes />} />
      </Route>
    </Routes>
  );
}

export default App;
