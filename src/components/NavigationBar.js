import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";

const NavCont = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5rem;
    border-bottom: 2px solid ${colors.primary};
    color: ${colors.priLightText};
    transition: 0.1s;
    &:visited {
      color: ${colors.priLightText};
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const NavigationBar = () => {
  return (
    <NavCont>
      <NavLink to="/">Record</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/user">Profile</NavLink>
    </NavCont>
  );
};

export default NavigationBar;
