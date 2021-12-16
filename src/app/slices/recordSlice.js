import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const recordSlice = createSlice({
  name: "records",
  initialState: {
    records: [],
    subjects: [],
  },
  reducers: {
    setRecords: (state, action) => {
      state.records = [...state.records, ...action.payload];
    },
    setSubjects: (state, action) => {
      state.subjects = [...state.subjects, ...action.payload];
    },
  },
});

export const { setRecords, setSubjects } = recordSlice.actions;

export default recordSlice.reducer;

export const getSubjects = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "subjects"));
    const dataSubjects = querySnapshot.docs.map((el) => {
      return { ...el.data(), subjectId: el.id };
    });
    dispatch(setSubjects(dataSubjects));
  } catch (error) {
    console.log(error);
  }
};

export const getRecords = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "records"));
    const dataRecords = querySnapshot.docs.map((el) => {
      return { ...el.data(), recordId: el.id };
    });
    dispatch(setRecords(dataRecords));
  } catch (error) {
    console.log(error);
  }
};

export const addSubject =
  ({ uid, subject, topic }) =>
  async (dispatch) => {
    const newData = {
      uid,
      subject,
      topic,
    };
    try {
      const docRef = await addDoc(collection(db, "subjects"), newData);
      console.log("Document written with ID: ", docRef.id);
      dispatch(setSubjects([{ ...newData, subjectId: docRef.id }]));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

export const addRecord =
  ({ uid, subject, topic, startDate, endDate, startTime, endTime }) =>
  async (dispatch) => {
    const newData = {
      uid,
      subject,
      topic,
      startDate,
      startTime,
      endDate,
      endTime,
    };
    try {
      const docRef = await addDoc(collection(db, "records"), newData);
      console.log("Document written with ID: ", docRef.id);
      dispatch(setRecords([{ ...newData, recordId: docRef.id }]));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
