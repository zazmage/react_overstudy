import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../components/MainPage";
import Statistics from "../components/Statistics";
import UserInfo from "../components/UserInfo";

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/user" element={<UserInfo />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </>
  );
};
