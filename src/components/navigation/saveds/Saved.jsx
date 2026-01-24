import { BookMarked } from "lucide-react";
import React from "react";

const Saved = () => {
  return (
    <div className="h-full flex flex-col ">
      <div className="p-2 font-semibold text-2xl text-gray-800">Saved</div>
      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <BookMarked size={50} className="text-gray-500" />
        <span className="text-sm text-gray-400 font-semibold italic">
          No Saved
        </span>
      </div>
    </div>
  );
};

export default Saved;
