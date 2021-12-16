import { useDispatch } from "react-redux";
import { logout } from "../app/slices/authSlice";

const UserInfo = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Soy un user Info</h2>
      <button onClick={dispatch(logout)}>Logout</button>
    </div>
  );
};

export default UserInfo;
