import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { loginEmailPassword, loginGoogle } from "../../app/slices/authSlice";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { GenericForm, NormalButton, NormInput } from "../../styles/StyledComp";
import googleIcon from "../../assets/btn_google_light_normal_ios.svg";
import styled from "styled-components";

const LoginGoogleLogo = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  font-family: roboto;
  font-weight: 600;
  padding-right: 5px;
  border-radius: 4px;
  transition: 0.1s;
  &:active {
    background-color: #4285f4;
    transform: scale(0.9);
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  return (
    <GenericForm>
      <div className="form-cont">
        <LoginGoogleLogo onClick={() => dispatch(loginGoogle())}>
          <img src={googleIcon} alt="Google Icon" />
          <p>Sign in with Google</p>
        </LoginGoogleLogo>
        <Formik
          className="form-cont"
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={yup.object().shape({
            email: yup.string().required("Email Required"),
            password: yup.string().required("Password Required"),
          })}
          onSubmit={({ email, password }, { resetForm }) => {
            dispatch(loginEmailPassword(email, password));
            resetForm();
          }}
        >
          {() => (
            <Form>
              <div>
                <label>
                  <NormInput
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </label>
                <ErrorMessage
                  name="email"
                  component={(errors) => <p>{errors.children}</p>}
                />
              </div>
              <div>
                <label>
                  <NormInput
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </label>
                <ErrorMessage
                  name="password"
                  component={(errors) => <p>{errors.children}</p>}
                />
              </div>
              <NormalButton type="submit">Submit</NormalButton>
            </Form>
          )}
        </Formik>
        <p>
          You do not have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </GenericForm>
  );
};

export default Login;
