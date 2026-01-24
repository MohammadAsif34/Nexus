import { CircleDotDashed } from "lucide-react";
import React from "react";

const Status = () => {
  return (
    <div className="h-full flex flex-col ">
      <div className="p-2 font-semibold text-2xl text-gray-800">Status</div>
      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <CircleDotDashed size={50} className="text-gray-500" />
        <span className="text-sm text-gray-400 font-semibold italic">
          No Status
        </span>
      </div>
    </div>
  );
};

export default Status;
