import React from "react";
import { useDispatch } from "react-redux";
import { setCurrChat } from "../../../redux/slice/currChat";
import { setTabs2 } from "../../../redux/slice/tabSlice";

const UserCard = ({ user }) => {
  const dispath = useDispatch();
  return (
    <div
      className="w-full py-2 px-2 flex items-center gap-2 cursor-default hover:bg-gray-200 rounded-sm"
      onClick={() => {
        dispath(setTabs2("chat"))
        dispath(setCurrChat(user));
      }}
    >
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gre en-300 shrink-0">
        <img
          src={user?.photo0 || "/default_avatar.png"}
          alt=""
          loading="lazy"
          className="w-10 h-10 object-cover "
        />
      </div>
      <div className="w-4/5  flex flex-col">
        <h2 className="text-[16px] font-semibold text-gray-600">
          {user?.name || "Etta McDaniel"}
        </h2>
        <p className=" text-[12px] text-gray-400 truncate">
          {user?.lastMessage ||
            "Wow that's great!Wow that's great! Wow that's great!Wow that's great!"}
        </p>
      </div>
      {user?.unreadCount > 0 && (
        <div className="w- 1/5 px-1 py-0.5 text-[10px] bg-red-200 rounded-sm text-red-500">
          {user?.unreadCount}
        </div>
      )}
    </div>
  );
};

export default UserCard;
