import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormDataTypes } from "./form-data.types";

const initialState: FormDataTypes = {
  value: null,
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    saveFormData: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

export const { saveFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
