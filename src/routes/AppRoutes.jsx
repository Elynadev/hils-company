import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import TourismeRoutes from "../domains/Tourisme/routes";
import CommunicationRoutes from "../domains/communication/routes";
import EventsRoutes from "../domains/Events/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/tourisme/*" element={<TourismeRoutes />} />
      <Route path="/communication/*" element={<CommunicationRoutes />} />
      <Route path="/events/*" element={<EventsRoutes />} />
    </Routes>
  );
};

export default AppRoutes;