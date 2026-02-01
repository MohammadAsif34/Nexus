import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url(/bg-00.png)] bg-no-repeat bg-center bg-cover ">
      <div className="w-full max-w-md px-10 py-8 border bg-white/50 backdrop-blur-3xl border-gray-300 rounded-xl shadow-sm ">
        <h1 className="text-center text-2xl font-semibold">Register Account</h1>
        <p className="text-center mt-1  text-gray-500">
          Sign up in to continue to Nexus
        </p>
        <div className=" mx-auto text-gray-500">
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
              className="w-full h-10 mt-6 bg-green-500 text-white  rounded-md cursor-not-allowed!"
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
            // onClick={() => loginWithRedirect()}
            // disabled={isLoading}
            className="w-full py-2  font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 transition disabled:opacity-60"
          >
            Continue with Google
          </button>

          <p className="mt-8 text-xs  text-center">
            Already have an account ?{" "}
            <Link to={"/login"} className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
