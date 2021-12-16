import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { registerEmailPassword } from "../../app/slices/authSlice";
import { Link } from "react-router-dom";
import * as yup from "yup";
import YupPassword from "yup-password";
import { GenericForm, NormalButton, NormInput } from "../../styles/StyledComp";
YupPassword(yup);

const Register = () => {
  const dispatch = useDispatch();
  return (
    <GenericForm>
      <div className="form-cont">
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
            email: yup
              .string()
              .email("Invalid Email")
              .required("Email required"),
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
              registerEmailPassword(
                name,
                lastName,
                email,
                password,
                repPassword
              )
            );
            resetForm();
          }}
        >
          {() => (
            <Form>
              <div>
                <label>
                  <NormInput
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </label>
                <ErrorMessage
                  name="name"
                  component={(errors) => <p>{errors.children}</p>}
                />
              </div>
              <div>
                <label>
                  <NormInput
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
                  <NormInput
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
              <div>
                <label>
                  <NormInput
                    type="password"
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
              <NormalButton type="submit">Submit</NormalButton>
            </Form>
          )}
        </Formik>
        <p>
          Already have an account? <Link to="/login">Sign-In</Link>
        </p>
      </div>
    </GenericForm>
  );
};

export default Register;
