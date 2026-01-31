import React from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url(/bg-0.jpg)] bg-no-repeat bg-center bg-cover  ">
      <div className="w-sm px-12 py-12 border bg-white border-gray-200 rounded-xl shadow-sm flex flex-col items-center gap-3">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex justify-center items-center">
          <User size={32} />
        </div>
        <p className="text-gray-700 font-semibold">You are Logged Out</p>
        <p className="  text-gray-400">Thank you for using Nexus</p>
        <Link
          to={"/login"}
          className="   p-2 px-8 rounded-sm bg-blue-400 text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Logout;
