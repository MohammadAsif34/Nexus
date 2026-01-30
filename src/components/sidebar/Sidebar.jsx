import React, { useEffect, useRef, useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setTabs } from "../../redux/slice/tabSlice";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

/* ================= Sidebar ================= */

const Sidebar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((s) => s.tabs.tabs);

  const navItems = [
    { id: "messages", icon: MessageSquareText, label: "Messages" },
    { id: "status", icon: CircleDotDashed, label: "Status" },
    { id: "saveds", icon: BookMarked, label: "Saved" },
    { id: "notifications", icon: Bell, label: "Notifications" },
  ];

  return (
    <aside className="w-20 h-full py-6 bg-green-500/70 backdrop-blur-md flex flex-col items-center z-10">
      {/* Logo */}
      <div className="mb-8 text-white">
        <MessagesSquare size={28} />
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col gap-4">
        {navItems.map(({ id, icon: Icon, label }) => (
          <NavButton
            key={id}
            icon={<Icon size={24} />}
            active={activeTab === id}
            label={label}
            onClick={() => dispatch(setTabs(id))}
          />
        ))}
      </div>

      {/* Bottom actions */}
      <div className="flex flex-col items-center gap-4 relative">
        <NavButton
          icon={<Settings size={24} />}
          active={activeTab === "settings"}
          label="Settings"
          onClick={() => dispatch(setTabs("settings"))}
        />
        <UserProfile />
      </div>
    </aside>
  );
};

export default Sidebar;

/* ================= Nav Button ================= */

const NavButton = ({ icon, active, onClick, label }) => {
  return (
    <motion.button
      type="button"
      title={label}
      onClick={onClick}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        backgroundColor: active ? "#ffffff" : "rgba(0,0,0,0)",
        color: active ? "#22c55e" : "#ffffff",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="p-2 rounded-full"
    >
      {icon}
    </motion.button>
  );
};

/* ================= User Profile ================= */

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const { logout, isLoading } = useAuth0();

  return (
    <div className="relative" ref={menuRef}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 rounded-full overflow-hidden bg-green-300 cursor-pointer"
        onClick={() => setOpen((p) => !p)}
      >
        <img
          src="/default_avatar.png"
          alt="User"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-14 text-gray-300 left-0 w-44 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden"
          >
            <MenuItem icon={<User size={18} />} label="Profile" />
            <MenuItem
              icon={<Settings2 size={18} />}
              label="Settings"
              onClick={() => dispatch(setTabs("settings"))}
            />
            <MenuItem icon={<Moon size={18} />} label="Dark mode" />

            <div className="border-t border-gray-300" />

            <button
              onClick={() => logout()}
              className="flex items-center gap-3 px-4 py-2 text-sm text-lack text-red-500 hover:bg-red-50"
            >
              <LogOut size={18} />
              {isLoading ? (
                <span className="inline-block w-5 h-5 border-2 border-red-500 rounded-full border-t-transparent animate-spin"></span>
              ) : (
                "Log out"
              )}
            </button>
            {/* <Link
              to="/logout"
              className="flex items-center gap-3 px-4 py-2 text-sm text-lack text-red-500 hover:bg-red-50"
            >
              <LogOut size={18} />
              Log out
            </Link> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ================= Menu Item ================= */

const MenuItem = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
  >
    {icon}
    {label}
  </button>
);
