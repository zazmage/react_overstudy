import { Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          console.log("Formulario enviado");
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div>
              <Field type="text" id="name" name="name" placeholder="name" />
              <ErrorMessage
                name="name"
                component={(errors) => <p>{errors.children}</p>}
              />
            </div>
            <div>
              <Field type="text" id="email" name="email" placeholder="email" />
              <ErrorMessage
                name="email"
                component={(errors) => <p>{errors.children}</p>}
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
