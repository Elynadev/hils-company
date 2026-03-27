import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import EvenementsPage from "./pages/EvenementsPage";
import ReservationsPage from "./pages/ReservationsPage";
import AdminLayout from "./components/Layout/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route
        path="*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="evenements" element={<EvenementsPage />} />
        <Route path="reservations" element={<ReservationsPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;