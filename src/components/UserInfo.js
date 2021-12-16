import { useDispatch } from "react-redux";
import { logout } from "../app/slices/authSlice";
import { GenericContainer, NormalButton } from "../styles/StyledComp";
import NavigationBar from "./NavigationBar";

const UserInfo = () => {
  const dispatch = useDispatch();
  return (
    <GenericContainer>
      <h2>User Info</h2>
      <NavigationBar />
      <NormalButton onClick={dispatch(logout)}>Logout</NormalButton>
    </GenericContainer>
  );
};

export default UserInfo;
