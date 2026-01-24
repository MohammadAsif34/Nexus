import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-lg px-12 py-8 border border-gray-300 rounded-xl shadow-sm ">
        <h1 className="text-center text-xl mb-2">Register Account</h1>
        <p className="text-center text-[10px] text-gray-400">
          Sign up in to continue to Nexus
        </p>
        <div className="w-72 mx-auto text-gray-500">
          <form action="">
            <label className="text-sm">Email</label>
            <input
              type="text"
              name="email"
              className="w-full h-8 border border-gray-300 mb-2 px-2 rounded-sm text-sm text-gray-600 "
              placeholder="email"
            />
            <label className="text-sm">Password</label>
            <input
              type="text"
              name="password"
              className="w-full h-8 border border-gray-300 mb-2 px-2 rounded-sm text-sm text-gray-600 "
              placeholder="password"
            />
            <button className="w-full h-8 mt-2 text-white rounded-sm bg-green-500 hover:bg-green-600 transition-all duration-300">
              Register
            </button>
          </form>
          <div className="my-8 relative">
            <hr className="text-gray-300" />
            <span className="text-sm px-2 bg-white absolute left-1/2 top-1/2 -translate-1/2">
              or
            </span>
          </div>
          <button className="text-xs w-full p-2 rounded-sm bg-blue-400 text-white">
            Register with Google
          </button>

          <p className="mt-4 text-xs text-center">
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
