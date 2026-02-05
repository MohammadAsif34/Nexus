import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import usersReducer from "../slice/userSlice";
import currChatReducer from "../slice/currChat";
import tabsReducer from "../slice/tabSlice";
import viewStatusReducer from "../slice/viewStatus";
import callReducer from "../slice/callSlice";
import savedReducer from "../slice/savedSlice";

/* Persist ONLY user slice */
const persistConfig = {
  key: "user",
  storage,
  whitelist: ["user", "isAuthenticated"], // 👈 field inside userSlice
};

const persistedUserReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer, // ✅ persisted
    currChat: currChatReducer,
    tabs: tabsReducer,
    viewStatus: viewStatusReducer,
    call: callReducer,
    saved: savedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
