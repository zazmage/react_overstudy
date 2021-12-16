// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import RecordActivity from "./timeRecord/RecordActivity";
import AddSubject from "./timeRecord/AddSubject";
import styled from "styled-components";
// import colors from "../styles/colors";
import { GenericContainer } from "../styles/StyledComp";

const MainCont = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  h1 {
    text-align: center;
    margin: 0;
  }
`;

const MainPage = () => {
  return (
    <GenericContainer>
      <MainCont>
        <h1>Overstudy</h1>
        <NavigationBar />
        <AddSubject />
        <RecordActivity />
        {/* <Outlet /> */}
      </MainCont>
    </GenericContainer>
  );
};

export default MainPage;
