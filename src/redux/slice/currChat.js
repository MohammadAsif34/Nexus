import { createSlice } from "@reduxjs/toolkit";

const currChat = createSlice({
  name: "currChat",
  initialState: { chat: null },
  reducers: {
    setCurrChat: (state, action) => {
      state.chat = action.payload;
    },
    clearCurrChat: (state) => {
      state.chat = null;
    },
  },
});
export const { setCurrChat, clearCurrChat } = currChat.actions;
export default currChat.reducer;
