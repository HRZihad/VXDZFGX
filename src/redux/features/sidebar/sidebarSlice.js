import { createSlice } from "@reduxjs/toolkit";

const initialState = {
isSidebarOpen: true
};

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action) => {
        state.isSidebarOpen = action.payload;
    }

  },
});

export const {  setIsSidebarOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;
