import React from "react";

const Loading = ({ type = "Loading" }) => {
  return (
    <div className="w-screen h-screen flex  flex-col items-center justify-center gap-2 bg-[url(/bg-00.png)] bg-no-repeat bg-center bg-cover ">
      <div className="relative w-20 h-20 p-4">
        <img src="/logo.png" alt="" className="w-full h-full  object-contain" />
        <div className="w-20 h-20 absolute top-0 left-0 border-4 border-white border-t-transparent rounded-full p-4 flex justify-center items-center animate-spin delay-500"></div>
      </div>
      <p className="text-xl text-gray-400 animate-pulse">
        {type}
        <span className="px-1 inline-block animate-bounce">.</span>
        <span className="px-1 inline-block animate-bounce [animation-delay:0.1s]">
          .
        </span>
        <span className="px-1 inline-block animate-bounce [animation-delay:0.2s]">
          .
        </span>
        <span className="px-1 inline-block animate-bounce [animation-delay:0.1s]">
          .
        </span>
      </p>
    </div>
  );
};

export default Loading;
