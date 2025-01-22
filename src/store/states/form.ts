// Redux Slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  forms: Record<string, boolean>;
}

const initialState: FormState = {
  forms: {
    companyform: false,
    corporateform: false,
    hearingform: false,
    intellectualform: false,
    litigationform: false,
    meetingform: false,
    personform: false,
    reminderform: false,
    taskform: false,
  },
};

export const formSlice = createSlice({
  name: "form-toggle-state",
  initialState,
  reducers: {
    toggleform: (state, action: PayloadAction<string>) => {
      const formKey = action.payload;

      // Reset all forms to false
      Object.keys(state.forms).forEach((key) => {
        state.forms[key] = false;
      });

      // Activate the selected form if it exists in the state
      if (state.forms.hasOwnProperty(formKey)) {
        state.forms[formKey] = true;
      }
    },
    closeform: (state, action: PayloadAction<string>) => {
      const formKey = action.payload;
      if (state.forms.hasOwnProperty(formKey)) {
        state.forms[formKey] = false;
      }
    },
  },
});

export const { toggleform, closeform } = formSlice.actions;
export default formSlice.reducer;
