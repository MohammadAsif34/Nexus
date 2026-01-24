import React, { useState } from "react";
import {
  Bell,
  BookMarked,
  CircleDotDashed,
  LogOut,
  MessageSquareText,
  MessagesSquare,
  Moon,
  Settings,
  Settings2,
  User,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setTabs } from "../../redux/slice/tabSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((s) => s.tabs.tabs);
  return (
    <div className="w-20 h-full py-6 bg-green-500/70 backdrop-blur flex flex-col items-center z-10">
      <MessagesSquare />
      <div className="flex-1 py-6 flex flex-col text-white gap-4">
        {/* ===== messages ===== */}
        <button
          type="button"
          title="Messages"
          onClick={() => dispatch(setTabs("messages"))}
          className={`p-2 rounded-full hover:bg-green-100 hover:text-green-500 transition-all duration-300 ${tabs == "messages" ? "bg-white text-green-500" : ""} `}
        >
          <MessageSquareText size={24} />
        </button>

        {/* ===== status ===== */}
        <button
          type="button"
          title="status"
          onClick={() => dispatch(setTabs("status"))}
          className={`p-2 rounded-full hover:bg-green-100 hover:text-green-500 transition-all duration-300 ${tabs == "status" ? "bg-white text-green-500" : ""} `}
        >
          <CircleDotDashed size={24} />
        </button>

        {/* ====== saveds ===== */}
        <button
          type="button"
          title="saveds"
          onClick={() => dispatch(setTabs("saveds"))}
          className={`p-2 rounded-full hover:bg-green-100 hover:text-green-500 transition-all duration-300 ${tabs == "saveds" ? "bg-white text-green-500" : ""} `}
        >
          <BookMarked size={24} />
        </button>

        {/* ====== notifications ====== */}
        <button
          type="button"
          title="notifications"
          onClick={() => dispatch(setTabs("notifications"))}
          className={`p-2 rounded-full hover:bg-green-100 hover:text-green-500 transition-all duration-300 ${tabs == "notifications" ? "bg-white text-green-500" : ""} `}
        >
          <Bell size={24} />
        </button>
      </div>

      <div>
        {/* ====== settings ====== */}
        <button
          type="button"
          title="settings"
          onClick={() => dispatch(setTabs("settings"))}
          className={`p-2 rounded-full hover:bg-green-100 hover:text-green-500 ${tabs == "settings" ? "bg-white text-green-500" : "text-white"}`}
        >
          <Settings size={24} />
        </button>
        {/* ===== user-profile ===== */}
        <UserProfile setTabs={setTabs} />
      </div>
    </div>
  );
};

export default Sidebar;

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="w-10 h-10 mt-4 rounded-full overflow-hidden bg-green-300 cursor-pointer relative"
        onClick={() => setIsOpen((p) => !p)}
      >
        <img src="/default_avatar.png" alt="" />
      </div>
      {isOpen && (
        <div className="absolute bottom-16 z-50 w-40 h-fit border border-gray-200 rounded-md bg-gray-50 shadow-sm cursor-default">
          <ul className="text-gray-600">
            <li className="px-4 py-1 pt-2 flex items-center gap-2 hover:bg-gray-100">
              <User size={16} />
              Profile
            </li>
            <li
              className="px-4 py-1 flex items-center gap-2 hover:bg-gray-100"
              onClick={() => setTabs("settings")}
            >
              <Settings2 size={16} />
              Setting
            </li>
            <li className="px-4 py-1 flex items-center gap-2 hover:bg-gray-100">
              <Moon size={16} />
              Dark mode
            </li>
            <li className="border-b border-gray-200"></li>
            <Link
              to={"/logout"}
              className="px-4 py-1 pb-2 flex items-center gap-2 text-red-500 hover:bg-red-100"
            >
              <LogOut size={16} />
              Log out
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};
