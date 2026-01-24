import React from "react";
import UserCard from "./UserCard";
import { CirclePlus, SquarePlus } from "lucide-react";
import user from "../../../assets/user.json";

const Messages = () => {
  return (
    <div className="w-full h-full bg-gre en-50 ">
      <div className="py-2 px-2 font-semibold text-2xl text-gray-800">
        Messages
      </div>
      {/* search  */}
      <div className="pt-2 px-2 py-4">
        <input
          type="text"
          name=""
          id=""
          className="w-full h-9 px-2 border border-gray-300 rounded-sm text-xs focus:outline-1"
          placeholder="Search"
        />
      </div>
      {/* contact-list  */}
      <div className="w-full h-5/6 overflow-y-auto custom-scroll  ">
        <div className=" w-full mb-2 border- b border-gray-300">
          <h3 className="mb-1 pb-0.5 mx-2 text-xs uppercase tracking-wider font-semibold text-gray-400 border-b border-gray-200">
            Favorites
          </h3>
          <div className="w-full">
            <UserCard />
          </div>
        </div>
        <div className="w-full border- t border-gray-300">
          <div className="py-2 flex  items-center gap-2">
            <h3 className="flex-1 mt-2 pb-0.5 text-xs uppercase tracking-wider font-semibold text-gray-400 border-b border-gray-200">
              Direct Messages
            </h3>
            <button className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
              <CirclePlus size={26} />
            </button>
          </div>
          <div className="w-full flex flex-col gap-1">
            {user?.map((u, idx) => (
              // <span></span>
              <UserCard user={u} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
