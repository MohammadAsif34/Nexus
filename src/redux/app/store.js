import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slice/userSlice";
import currChatReducer from "../slice/currChat";
import tabsReducer from "../slice/tabSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currChat: currChatReducer,
    tabs: tabsReducer,
  },
});
