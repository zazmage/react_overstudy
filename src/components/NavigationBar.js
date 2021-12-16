import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <NavLink to="/">Record Activity</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/user">Profile</NavLink>
    </div>
  );
};

export default NavigationBar;
