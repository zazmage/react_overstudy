import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import recordReducer from "./slices/recordSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    records: recordReducer,
  },
});
