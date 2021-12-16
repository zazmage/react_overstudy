import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { loginEmailPassword } from "../../app/slices/authSlice";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { GenericForm, NormalButton, NormInput } from "../../styles/StyledComp";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <GenericForm>
      <div className="form-cont">
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
