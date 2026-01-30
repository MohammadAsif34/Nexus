import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-10 py-8 bg-white border border-gray-200 rounded-xl shadow-sm">
        {/* Header */}
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center   text-gray-500 mt-1">
          Sign in to continue to <span className="font-semibold">Nexus</span>
        </p>

        {/* Form */}
        <form className="mt-6 space-y-3">
          <div>
            <label className="  font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full h-10 mt-1 px-2  border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              disabled
            />
          </div>

          <div>
            <label className="  font-medium text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-10 mt-1 px-2  border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              disabled
            />
          </div>

          {/* Disabled because Auth0 handles auth */}
          <button
            type="button"
            disabled
            className="w-full h-10 mt-6 bg-green-500 text-white  rounded-md cursor-not-allowed"
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
          onClick={() => loginWithRedirect()}
          disabled={isLoading}
          className="w-full py-2  font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 transition disabled:opacity-60"
        >
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-4   text-center text-gray-500">
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
