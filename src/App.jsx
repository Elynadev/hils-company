import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TourismeRoutes from "./domains/Tourisme/routes";
import AdminRoutes from "./domains/Admin/routes";
import { AuthProvider } from "./domains/Admin/contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tourisme/*" element={<TourismeRoutes />} />

        <Route
          path="/admin/*"
          element={
            <AuthProvider>
              <AdminRoutes />
            </AuthProvider>
          }
        />

        <Route path="/" element={<Navigate to="/tourisme" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;