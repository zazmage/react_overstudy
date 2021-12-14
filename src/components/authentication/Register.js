import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logout, registerEmailPassword } from "../../app/slices/authSlice";
import { Link } from "react-router-dom";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          repPassword: "",
        }}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .max(15, "Must be 15 characters max")
            .required("Name required"),
          lastName: yup
            .string()
            .max(15, "Must be 15 characters max")
            .required("Last name required"),
          email: yup.string().email("Invalid Email").required("Email required"),
          password: yup.string().password().required("Password required"),
          repPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Repeat password required"),
        })}
        onSubmit={(
          { name, lastName, email, password, repPassword },
          { resetForm }
        ) => {
          dispatch(
            registerEmailPassword(name, lastName, email, password, repPassword)
          );
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div>
              <label>
                <Field type="text" id="name" name="name" placeholder="Name" />
              </label>
              <ErrorMessage
                name="name"
                component={(errors) => <p>{errors.children}</p>}
              />
            </div>
            <div>
              <label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                />
              </label>
              <ErrorMessage
                name="lastName"
                component={(errors) => <p>{errors.children}</p>}
              />
            </div>
            <div>
              <label>
                <Field
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
            <div>
              <label>
                <Field
                  type="text"
                  id="repPassword"
                  name="repPassword"
                  placeholder="Repeat password"
                />
              </label>
              <ErrorMessage
                name="repPassword"
                component={(errors) => <p>{errors.children}</p>}
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <p>
        Already have an account? <Link to="/login">Sign-In</Link>
      </p>
      <button onClick={dispatch(logout)}>Logout</button>
    </div>
  );
};

export default Register;
