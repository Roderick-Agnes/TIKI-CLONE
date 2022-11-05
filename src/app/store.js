import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

const rootReducers = { user: userReducer };

export default configureStore({
  reducer: rootReducers,
});
