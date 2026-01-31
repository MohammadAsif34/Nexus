import React from "react";
import { motion } from "framer-motion";
import {
  Key,
  Smartphone,
  ShieldCheck,
  LogOut,
  AlertTriangle,
} from "lucide-react";

const Security = () => {
  return (
    <section className="h-full flex flex-col bg-white">
      {/* ===== Header ===== */}
      <div className="px-4 py-3 text-xl font-semibold text-gray-800 border-b border-gray-200">
        Security
      </div>

      {/* ===== Content ===== */}
      <div className="flex-1 px-6 py-6 overflow-y-auto custom-scroll">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="max-w-md flex flex-col gap-3"
        >
          <SecurityItem
            icon={Key}
            title="Change Password"
            desc="Update your account password regularly to keep your account secure."
            action="Change"
          />

          <SecurityItem
            icon={Smartphone}
            title="Two-Step Verification"
            desc="Add an extra layer of security using OTP or authenticator apps."
            action="Enable"
          />

          <SecurityItem
            icon={ShieldCheck}
            title="Active Sessions"
            desc="View and manage devices where your account is logged in."
            action="View"
          />

          <SecurityItem
            icon={LogOut}
            title="Log out from all devices"
            desc="Immediately log out your account from all active sessions."
            action="Log out"
            danger
          />

          <SecurityItem
            icon={AlertTriangle}
            title="Security Alerts"
            desc="Get notified about suspicious login attempts."
            action="Manage"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Security;

/* ================= Security Item ================= */

const SecurityItem = ({ icon: Icon, title, desc, action, danger = false }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: "#f3f4f6" }}
      className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 cursor-default"
    >
      <Icon size={20} className={danger ? "text-red-500" : "text-green-500"} />

      <div className="flex-1">
        <h3
          className={`text-sm font-semibold ${
            danger ? "text-red-600" : "text-gray-700"
          }`}
        >
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled
        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition cursor-no-drop!
          ${
            danger
              ? "bg-red-100 text-red-600 hover:bg-red-200"
              : "bg-green-100 text-green-600 hover:bg-green-200"
          }`}
      >
        {action}
      </motion.button>
    </motion.div>
  );
};
