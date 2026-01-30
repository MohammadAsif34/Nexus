import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slice/userSlice";
import currChatReducer from "../slice/currChat";
import tabsReducer from "../slice/tabSlice";
import viewStatusReducer from "../slice/viewStatus";
import callReducer from "../slice/callSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currChat: currChatReducer,
    tabs: tabsReducer,
    viewStatus: viewStatusReducer,
    call: callReducer,
  },
});
