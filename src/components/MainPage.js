import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { logout } from "../app/slices/authSlice";
import NavigationBar from "./NavigationBar";

const MainPage = () => {
  // const auth = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Soy el Main Page</h1>
      <NavigationBar />
      <Outlet />
      <button onClick={dispatch(logout)}>Logout</button>
    </div>
  );
};

export default MainPage;
