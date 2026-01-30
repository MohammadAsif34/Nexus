import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setCurrChat } from "../../../redux/slice/currChat";
import { setTabs2 } from "../../../redux/slice/tabSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTabs2("chat"));
    dispatch(setCurrChat(user));
  };

  return (
    <motion.div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      whileHover={{ backgroundColor: "#e5e7eb" }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full px-2 py-2 flex items-center gap-3 rounded-md cursor-pointer focus:outline-none transition-all duration-75"
    >
      {/* ===== Avatar ===== */}
      <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden bg-green-300">
        <img
          src={user?.o || "/default_avatar.png"}
          alt={user?.name || "User avatar"}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Online Indicator (optional) */}
        {user?.online && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>

      {/* ===== Content ===== */}
      <div className="flex-1 min-w-0 flex flex-col">
        <h2 className="text-sm font-semibold text-gray-700 truncate">
          {user?.name || "Etta McDaniel"}
        </h2>

        <p className="text-xs text-gray-400 truncate">
          {user?.lastMessage ||
            "Wow that's great! Wow that's great! Wow that's great!"}
        </p>
      </div>

      {/* ===== Unread Badge ===== */}
      {user?.unreadCount > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="min-w-[18px] h-[18px] px-1 flex items-center justify-center
                     text-[10px] font-semibold bg-red-400 text-white rounded-full"
        >
          {user.unreadCount}
        </motion.div>
      )}
    </motion.div>
  );
};

export default UserCard;
