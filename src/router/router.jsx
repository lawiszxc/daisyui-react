import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import CRUDFunction from "../pages/CRUDFunction";
import Dashboard from "../pages/Dashboard";
import Login from "../auth/Login";
import Register from "../auth/Register";
import RouteGuard from "../router/RouteGuard";
import PublicRoute from "../router/PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      <Route
        element={
          <RouteGuard>
            <App />
          </RouteGuard>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crud-function" element={<CRUDFunction />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
