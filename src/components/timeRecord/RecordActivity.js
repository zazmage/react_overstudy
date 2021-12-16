import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecord,
  getRecords,
  getSubjects,
} from "../../app/slices/recordSlice";
import StopWatch from "./StopWatch";

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
    <div>
      {!subjects.length ? (
        <>
          <select name="subject">
            <option value="noSelection">Select or add new subject</option>
          </select>
          <select name="topic">
            <option value="noSelection">Select or add new topic</option>
          </select>
        </>
      ) : (
        <>
          <select name="subject" onChange={handleChange}>
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
          </select>
          <select name="topic" onChange={handleChange}>
            <option value="noSelection">Select or add new topic</option>
            {subjects
              .filter((el) => el.subject === timeRecordData.subject)
              .map((el) => (
                <option key={el.subjectId} value={el.topic}>
                  {el.topic}
                </option>
              ))}
          </select>
        </>
      )}
      <StopWatch
        props={{
          timeRecordData,
          setTimeRecordData,
          initialRecordState,
        }}
      />
      <button onClick={handleSendRecord}>Add record</button>
    </div>
  );
};

export default RecordActivity;
