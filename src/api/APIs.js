import api from "./appClient";

// ================= Login API ================
export const loginAPI = async (payload) => {
  const res = await api.post("/login", payload);
  return res.data;
};

// ================= Logout API ================
export const logoutAPI = async () => {
  const res = await api.post("/logout");
  return;
};

// ================= Register API ================
export const registerAPI = async ({ payload }) => {
  const res = await api.post("/register", { payload });
  return res.data;
};

// ================= fetch User API ================
export const fetchUserAPI = async () => {
  const res = await api.get("/fetch-user");
  return res.data;
};

export const fetchNewUserResults = async (text) => {
  const res = await api.get(`/users/search?q=${text}`);
  return res.data;
};

export const sendRequestAPI = async ({ to, from }) => {
  const res = await api.get(`/users/request?to=${to}&from=${from}`);
  return res.data;
};
