import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateTypes {
  isSidebarOpen: boolean;
}

const initialState: initialStateTypes = {
  isSidebarOpen: false,
};

export const globalSlice = createSlice({
  name: "app-state",
  initialState,
  reducers: {
    setIsSidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setIsSidebarOpen } = globalSlice.actions;
