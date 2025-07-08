import { Routes, Route } from "react-router-dom";
import CRUDFunction from "../pages/CRUDFunction";
import App from "../App";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/crud-function" element={<CRUDFunction />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
