import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../components/MainPage";

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
