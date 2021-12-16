import { Field } from "formik";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
   box-sizing: border-box; 
   scroll-behavior: smooth;
   margin: 0;
   padding: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  };
`;

export const GenericForm = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
  width: 90%;
  @media (max-width: 500px) {
    width: 100%;
    padding: 10px;
  }
  .form-cont {
    background-color: ${colors.background};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 20px;
    border: solid 5px ${colors.secLight};
    border-radius: 10px;
    padding: 30px;
    width: 100%;
    min-width: 300px;
  }
  form {
    /* background-color: yellow; */
    width: 50vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 10px;
    div {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      p {
        color: ${colors.priDark};
      }
    }
  }
`;

export const GenericContainer = styled.div`
  background-color: ${colors.background};
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  padding: 30px;
  width: 90%;
  border: solid 5px ${colors.secLight};
  border-radius: 10px;
  h1,
  h2 {
    text-align: center;
  }
`;

export const NormalButton = styled.button`
  border: none;
  background-color: ${colors.secundary};
  color: ${colors.secText};
  font-weight: 600;
  width: 40%;
  height: 30px;
  min-width: 100px;
  max-width: 150px;
  border-radius: 5px;
  transition: 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
    background-color: ${colors.secLight};
  }
`;

export const StopWatchBtn = styled.button`
  border: none;
  background-color: ${colors.priLight};
  color: ${colors.priLightText};
  font-weight: 600;
  width: 40%;
  height: 30px;
  min-width: 100px;
  max-width: 150px;
  border-radius: 5px;
  transition: 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
    background-color: ${colors.secLight};
  }
`;

export const NormInput = styled(Field)`
  border: none;
  border-radius: 7px;
  height: 40px;
  padding: 5px 10px 5px 10px;
  font-weight: 600;
  &:focus {
    outline: none;
    border: 2px solid ${colors.secundary};
  }
`;

export const NormSelect = styled.select`
  border: none;
  border-radius: 7px;
  width: 50%;
  max-width: 400px;
  height: 40px;
  padding: 5px 10px 5px 10px;
  font-weight: 600;
  &:focus {
    outline: none;
    border: 2px solid ${colors.secundary};
  }
`;
