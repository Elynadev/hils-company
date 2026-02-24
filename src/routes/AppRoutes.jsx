import { Routes, Route } from "react-router-dom";
import TourismeRoutes from "../domains/Tourisme/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/tourisme/*" element={<TourismeRoutes />} />
    </Routes>
  );
};

export default AppRoutes;