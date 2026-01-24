import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "tabs",
  initialState: { tabs: "messages", tabs2: "info" },
  reducers: {
    setTabs: (state, action) => {
      state.tabs = action.payload;
    },
    setTabs2: (state, action) => {
      state.tabs2 = action.payload;
    },
  },
});

export const { setTabs, setTabs2 } = tabSlice.actions;
export default tabSlice.reducer;
