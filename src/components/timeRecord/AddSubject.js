import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useState } from "react";
import { addSubject } from "../../app/slices/recordSlice";

const AddActivity = () => {
  const { user } = useSelector((state) => state.auth);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => setShowAddSubject(!showAddSubject)}>
        Add subject
      </button>
      {showAddSubject && (
        <>
          <h2>Add subject</h2>
          <Formik
            initialValues={{
              subject: "",
              topic: "",
            }}
            validationSchema={yup.object().shape({
              subject: yup.string().required("subject Required"),
              topic: yup.string().required("topic Required"),
            })}
            onSubmit={({ subject, topic }, { resetForm }) => {
              dispatch(addSubject({ uid: user.uid, subject, topic }));
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
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                    />
                  </label>
                  <ErrorMessage
                    name="subject"
                    component={(errors) => <p>{errors.children}</p>}
                  />
                </div>
                <div>
                  <label>
                    <Field
                      className="form-control"
                      type="text"
                      id="topic"
                      name="topic"
                      placeholder="Topic"
                    />
                  </label>
                  <ErrorMessage
                    name="topic"
                    component={(errors) => <p>{errors.children}</p>}
                  />
                </div>
                <button type="submit">Save</button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default AddActivity;
