// redux/slice/statusViewerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const viewStatus = createSlice({
  name: "viewStatus",
  initialState: {
    open: false,
    statuses: [
      {
        id: 1,
        name: "My Status",
        avatar: "https://i.pravatar.cc/100?img=11",
        isMine: true,
      },
      {
        id: 2,
        name: "Rahul",
        avatar: "https://i.pravatar.cc/100?img=12",
      },
      {
        id: 3,
        name: "Anjali",
        avatar: "https://i.pravatar.cc/100?img=13",
      },
      {
        id: 4,
        name: "Amit",
        avatar: "https://i.pravatar.cc/100?img=14",
      },
      {
        id: 5,
        name: "Neha",
        avatar: "https://i.pravatar.cc/100?img=15",
      },
    ],
    index: 0,
  },
  reducers: {
    openStatusViewer: (state, action) => {
      console.log(action.payload);
      state.open = true;
      state.statuses = action.payload.statuses;
      state.index = action.payload.index || 0;
    },
    closeStatusViewer: (state) => {
      state.open = false;
      state.statuses = [];
      state.index = 0;
    },
    nextStatus: (state) => {
      if (state.index < state.statuses.length - 1) {
        state.index += 1;
      } else {
        state.open = false;
      }
    },
    prevStatus: (state) => {
      if (state.index > 0) state.index -= 1;
    },
  },
});

export const { openStatusViewer, closeStatusViewer, nextStatus, prevStatus } =
  viewStatus.actions;

export default viewStatus.reducer;
