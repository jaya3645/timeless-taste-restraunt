import { Route, Routes } from "react-router-dom";
import PageLayout from "./pages/pageLayout";
import SideNavRoutes from "./routes";

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/*" element={<SideNavRoutes />} />
      </Route>
    </Routes>
  );
}

export default App;
