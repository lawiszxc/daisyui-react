import { Routes, Route } from "react-router-dom";
import App from "../App";
import CRUDFunction from "../pages/CRUDFunction";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/crud-function" element={<CRUDFunction />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
