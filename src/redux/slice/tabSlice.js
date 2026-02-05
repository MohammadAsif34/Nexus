import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "tabs",
  initialState: { open: false, tabs: "messages", tabs2: "info", topTabs: null },
  reducers: {
    setTabs: (state, action) => {
      state.tabs = action.payload;
    },
    setTabs2: (state, action) => {
      state.tabs2 = action.payload;
    },
    setToptabs: (state, action) => {
      state.open = true;
      state.topTabs = action.payload;
    },
    closeTopTabs: (state) => {
      state.open = false;
      state.topTabs = null;
    },
  },
});

export const { setTabs, setTabs2, setToptabs, closeTopTabs } = tabSlice.actions;
export default tabSlice.reducer;
