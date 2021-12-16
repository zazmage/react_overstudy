import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useState } from "react";
import { addSubject } from "../../app/slices/recordSlice";
import { NormalButton, NormInput } from "../../styles/StyledComp";
import styled from "styled-components";
import colors from "../../styles/colors";

const SmallForm = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 15px;
  form {
    width: 50vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 5px;
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

const AddActivity = () => {
  const { user } = useSelector((state) => state.auth);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const dispatch = useDispatch();
  return (
    <SmallForm>
      <NormalButton onClick={() => setShowAddSubject(!showAddSubject)}>
        Add subject
      </NormalButton>
      {showAddSubject && (
        <>
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
                    <NormInput
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
                    <NormInput
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
                <NormalButton type="submit">Save</NormalButton>
              </Form>
            )}
          </Formik>
        </>
      )}
    </SmallForm>
  );
};

export default AddActivity;
