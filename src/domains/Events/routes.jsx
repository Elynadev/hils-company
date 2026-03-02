import { Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import AfricanConscienceChill from "./pages/AfricanConscienceChill";
import EventServicesPage from "./pages/EventServicesPage";

const EventsRoutes = () => {
  return (
    <Routes>
      <Route index element={<EventsPage />} />
      <Route path="african-conscience-chill" element={<AfricanConscienceChill />} />
      <Route path="services" element={<EventServicesPage />} />
    </Routes>
  );
};

export default EventsRoutes;
