import { Routes, Route } from "react-router-dom";
import TourismePage from "./pages/TourismePage";

const TourismeRoutes = () => {
  return (
    <Routes>
      <Route index element={<TourismePage />} />
    </Routes>
  );
};

export default TourismeRoutes;