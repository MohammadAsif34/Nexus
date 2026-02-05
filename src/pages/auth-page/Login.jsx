import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useGoogleLogin from "../../hooks/HandleGoogleLogin";
import { setAuthenticated, setUser } from "../../redux/slice/userSlice";
import { loginAPI } from "../../api/APIs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const defalt_form = { email: "asif@gmail.com", password: "" };

const Login = () => {
  const dispatch = useDispatch();
  const { loginWithRedirect, isLoading } = useAuth0();
  const { startGoogleLogin, syncWithBackend } = useGoogleLogin();
  const navigate = useNavigate();
  const [form, setForm] = useState(defalt_form);

  const handleFormChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginAPI(form);
      // console.log("login res", res);
      if (res.success === true) {
        dispatch(setAuthenticated());
        dispatch(setUser(res.data));
        navigate("/");
      }
    } catch (error) {
      console.log("login error : ", error.message);
    }
    console.log(form);
    setForm(defalt_form);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center b g-gray-50 bg-[url(/bg-00.png)] bg-no-repeat bg-center bg-cover">
      <div className="w-full max-w-md px-10 py-8 bg-white/50 border border-gray-100 backdrop-blur-2xl rounded-xl shadow">
        {/* Header */}
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center   text-gray-500 mt-1">
          Sign in to continue to <span className="font-semibold">Nexus</span>
        </p>

        {/* Form */}
        <form className="mt-6 space-y-3" onSubmit={handleFormSubmit}>
          <div>
            <label className="  font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleFormChange}
              placeholder="you@example.com"
              className="w-full h-10 mt-1 px-2  border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="  font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleFormChange}
              placeholder="••••••••"
              className="w-full h-10 mt-1 px-2  border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          {/* Disabled because Auth0 handles auth */}
          <button
            type="submit"
            className="w-full h-10 mt-6 bg-green-500 text-white  rounded-md "
          >
            Log in
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <hr className="flex-1 border-gray-300" />
          <span className="  text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Auth0 Login */}
        <button
          onClick={startGoogleLogin}
          disabled={isLoading}
          className="w-full py-2  font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 transition disabled:opacity-60"
        >
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-8  text-xs text-center text-gray-500">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
