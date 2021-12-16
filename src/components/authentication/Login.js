import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { loginEmailPassword, logout } from "../../app/slices/authSlice";
import { Link } from "react-router-dom";
import * as yup from "yup";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
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
                <Field
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
                <Field
                  className="form-control"
                  type="text"
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
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <p>
        You do not have an account? <Link to="/register">Register</Link>
      </p>
      <button onClick={dispatch(logout)}>Logout</button>
    </div>
  );
};

export default Login;
