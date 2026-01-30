import React from "react";
import { motion } from "framer-motion";
import { Eye, Image, Clock } from "lucide-react";

const Privacy = () => {
  return (
    <section className="h-full flex flex-col bg-white">
      {/* ===== Header ===== */}
      <div className="px-4 py-3 text-xl font-semibold text-gray-800 border-b border-gray-200">
        Privacy
      </div>

      {/* ===== Content ===== */}
      <div className="flex-1 px-6 py-6 overflow-y-auto custom-scroll">
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="max-w-md flex flex-col gap-4"
        >
          <PrivacyItem icon={Image} label="Profile Photo" />

          <PrivacyItem icon={Eye} label="Status" />

          <PrivacyItem icon={Clock} label="Last Seen" />
        </motion.form>
      </div>
    </section>
  );
};

export default Privacy;

/* ================= Privacy Item ================= */

const PrivacyItem = ({ icon: Icon, label }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: "#f3f4f6" }}
      className="flex items-center justify-between gap-4
                 p-3 rounded-lg border border-gray-200"
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-green-500" />
        <label className="text-sm font-semibold text-gray-700">{label}</label>
      </div>

      <select
        className="px-2 py-1.5 text-sm border border-gray-300 rounded-md
                   focus:outline-none focus:ring-1 focus:ring-green-400"
      >
        <option>Everyone</option>
        <option>Contacts</option>
        <option>Nobody</option>
      </select>
    </motion.div>
  );
};
