import React from "react";
import {
  BadgeQuestionMark,
  Bell,
  Edit,
  Lock,
  LogOut,
  ShieldCheck,
  User,
  Moon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setTabs2 } from "../../../redux/slice/tabSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { default_user } from "../../../assets/defaultUser";

/* ================= Settings ================= */

const Settings = () => {
  let { user } = useAuth0();
  if (!user) user = default_user;
  const dispatch = useDispatch();

  const items = [
    { label: "profile", icon: User, text: "Profile" },
    { label: "notification", icon: Bell, text: "Notifications" },
    { label: "darkmode", icon: Moon, text: "Dark Mode" },
    { label: "privacy", icon: Lock, text: "Privacy" },
    { label: "security", icon: ShieldCheck, text: "Security" },
    { label: "help", icon: BadgeQuestionMark, text: "Help" },
  ];

  return (
    <section className="h-full flex flex-col bg-green-50/40 cursor-default">
      {/* ===== Header ===== */}
      <div className="px-3 py-3 text-xl font-semibold text-gray-800">
        Settings
      </div>

      <div className="flex-1 p-3">
        {/* ===== Profile Card ===== */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="relative flex items-center gap-4 p-4 mb-3 shadow
                     bg-white/60 backdrop-blur-xl rounded-lg
                     hover:bg-white/80 transition"
        >
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300 shrink-0">
            <img
              src={user?.picture}
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <p className="font-semibold text-gray-700">
              {User.name || "Full name"}
            </p>
            <span className="text-xs text-gray-400">View & edit profile</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-green-200"
            onClick={() => dispatch(setTabs2("profile"))}
          >
            <Edit size={18} />
          </motion.button>
        </motion.div>

        {/* ===== Settings List ===== */}
        <div className="flex flex-col gap-1">
          {items.map(({ label, icon: Icon, text }) => (
            <SettingItem
              key={label}
              label={label}
              icon={<Icon size={18} />}
              onClick={() => dispatch(setTabs2(label))}
            >
              {text}
            </SettingItem>
          ))}
        </div>

        <hr className="my-3 border-gray-300" />

        {/* ===== Logout ===== */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center gap-2 px-4 py-2
                     text-sm font-semibold text-red-500
                     rounded-md hover:bg-red-100 transition"
        >
          <LogOut size={18} />
          Log out
        </motion.button>
      </div>
    </section>
  );
};

export default Settings;

/* ================= Setting Item ================= */

const SettingItem = ({ children, icon, onClick }) => {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      whileHover={{ backgroundColor: "#e5e7eb" }}
      whileTap={{ scale: 0.98 }}
      className="px-4 py-2.5 flex items-center gap-2
                 rounded-md text-sm font-semibold
                 cursor-pointer focus:outline-none"
      onClick={onClick}
    >
      {icon}
      {children}
    </motion.div>
  );
};
