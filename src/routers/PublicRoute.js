import { Navigate } from "react-router-dom";

export const PublicRoute = ({ auth, children }) => {
  return !auth ? children : <Navigate to="/*" />;
};
