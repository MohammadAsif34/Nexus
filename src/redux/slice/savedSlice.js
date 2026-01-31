import { createSlice } from "@reduxjs/toolkit";
const default_state = {
  saved: [],
};
const saved = createSlice({
  name: "saved",
  initialState: default_state,
  reducers: {
    addToSaved: (state, action) => {
      state.saved.push(action.payload);
    },
    removeToSaved: (statse, action) => {
      const { id } = action.payload;
      state.saved = state.saved.filter((i) => i.id != id);
    },
  },
});

export const { addToSaved, removeToSaved } = saved.actions;
export default saved.reducer;
