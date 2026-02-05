import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8800/api",
  headers: { "Content-Type": "Application/json" },
  withCredentials: true,
});
export default api;
