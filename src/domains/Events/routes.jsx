import { Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import AfricanConscienceChill from "./pages/AfricanConscienceChill";

const EventsRoutes = () => {
  return (
    <Routes>
      <Route index element={<EventsPage />} />
      <Route path="african-conscience-chill" element={<AfricanConscienceChill />} />
    </Routes>
  );
};

export default EventsRoutes;
