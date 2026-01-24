import React from "react";

const Darkmode = () => {
  return (
    <div className="h-full flex flex-col cursor-default ">
      <div className="py-2 px-4 font-semibold text-2xl text-gray-800 border-b border-gray-200">
        Dark Mode
      </div>
      <div className="flex-1 px-8 py-8 flex items-start gap-4 flex-wrap">
        <div className="min-w-40 max-w-60 h-20 border border-gray-300 rounded-xl  flex justify-center items-center font-semibold text-gray-500 hover:bg-gray-50 cursor-pointer">
          Light
        </div>
        <div className="min-w-40 max-w-60 h-20 border border-gray-300 rounded-xl  flex justify-center items-center font-semibold text-gray-500 hover:bg-gray-50 cursor-pointer">
          Dark
        </div>
        <div className="min-w-40 max-w-60 h-20 border border-gray-300 rounded-xl  flex justify-center items-center font-semibold text-gray-500 hover:bg-gray-50 cursor-pointer">
          System
        </div>
      </div>
    </div>
  );
};

export default Darkmode;
