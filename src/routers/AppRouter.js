import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setReady, setUser } from "../app/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRoutes } from "./DashboardRoutes";

const AppRouter = () => {
  const { user, ready } = useSelector((state) => state.auth);
  const authStatus = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(authStatus, (user) => {
      if (user) {
        dispatch(
          setUser({ name: user.displayName, email: user.email, uid: user.uid })
        );
        dispatch(setReady());
      } else {
        dispatch(setUser(null));
        dispatch(setReady());
      }
    });
  }, [authStatus, dispatch]);

  return !ready ? (
    <h2>Loading...</h2>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute auth={user}>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute auth={user}>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute auth={user}>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
