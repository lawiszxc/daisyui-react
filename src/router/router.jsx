import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import CRUDFunction from "../pages/CRUDFunction";
import Dashboard from "../pages/Dashboard";
import Login from "../auth/Login";
import Register from "../auth/Register";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route element={<App />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crud-function" element={<CRUDFunction />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
