import { configureStore } from "@reduxjs/toolkit";
import formData from "./form-data/form-data.slice";

const store = configureStore({
  reducer: formData,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
