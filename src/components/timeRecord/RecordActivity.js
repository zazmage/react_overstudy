import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  addRecord,
  getRecords,
  getSubjects,
} from "../../app/slices/recordSlice";
import { NormalButton, NormSelect } from "../../styles/StyledComp";
import StopWatch from "./StopWatch";

const RecordCont = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 10px;
`;

const initialRecordState = {
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  uid: "",
  subject: "",
  topic: "",
};

const RecordActivity = () => {
  const { records, subjects } = useSelector((state) => state.records);
  const [timeRecordData, setTimeRecordData] = useState(initialRecordState);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!records.length) dispatch(getRecords());
  }, [records, dispatch]);

  useEffect(() => {
    setTimeRecordData((timeRecordData) => {
      return { ...timeRecordData, uid: user.uid };
    });
  }, [user]);

  useEffect(() => {
    if (!subjects.length) dispatch(getSubjects());
  }, [subjects, dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    setTimeRecordData({
      ...timeRecordData,
      [name]: value,
    });
  };

  const handleSendRecord = () => dispatch(addRecord(timeRecordData));
  return (
    <RecordCont>
      {!subjects.length ? (
        <>
          <NormSelect name="subject">
            <option value="noSelection">Select or add new subject</option>
          </NormSelect>
          <NormSelect name="topic">
            <option value="noSelection">Select or add new topic</option>
          </NormSelect>
        </>
      ) : (
        <>
          <NormSelect name="subject" onChange={handleChange}>
            <option value="noSelection">Select or add new subject</option>
            {subjects
              .filter(
                (i, index, self) =>
                  i.uid === user.uid &&
                  index === self.findIndex((j) => j.subject === i.subject)
              )
              .map((el) => (
                <option key={el.subjectId} value={el.subject}>
                  {el.subject}
                </option>
              ))}
          </NormSelect>
          <NormSelect name="topic" onChange={handleChange}>
            <option value="noSelection">Select or add new topic</option>
            {subjects
              .filter((el) => el.subject === timeRecordData.subject)
              .map((el) => (
                <option key={el.subjectId} value={el.topic}>
                  {el.topic}
                </option>
              ))}
          </NormSelect>
        </>
      )}
      <StopWatch
        props={{
          timeRecordData,
          setTimeRecordData,
          initialRecordState,
        }}
      />
      <NormalButton onClick={handleSendRecord}>Add record</NormalButton>
    </RecordCont>
  );
};

export default RecordActivity;
