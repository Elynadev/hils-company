import { Routes, Route } from "react-router-dom";
import CommunicationPage from "./pages/CommunicationPage";

const CommunicationRoutes = () => {
  return (
    <Routes>
      <Route index element={<CommunicationPage />} />
    </Routes>
  );
};

export default CommunicationRoutes;
