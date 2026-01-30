import React from "react";
import HomePage from "./pages/home-page/HomePage";
import Login from "./pages/auth-page/Login";
import Register from "./pages/auth-page/Register";
import Logout from "./pages/auth-page/Logout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Camera from "./pages/Camera";

const Layout = () => {
  return <></>;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/camera",
    element: <Camera />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Logout",
    element: <Logout />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
