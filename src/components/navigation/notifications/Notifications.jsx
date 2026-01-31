import React, { useState } from "react";
import { Bell, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const initialNotifications = [
  {
    _id: 1,
    title: "New Message",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque vitae nam.",
  },
  {
    _id: 2,
    title: "Profile Update",
    message: "Your profile information was updated successfully.",
  },
  {
    _id: 3,
    title: "Security Alert",
    message: "A new login was detected from a different device.",
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n._id !== id));
  };

  return (
    <section className="h-full flex flex-col">
      {/* ===== Header ===== */}
      <div className="p-2 text-2xl font-semibold text-gray-800 ">
        Notifications
      </div>

      {/* ===== Content ===== */}
      <div className="flex-1 p-3 overflow-y-auto custom-scroll bg- white shadow rounded-xl">
        <AnimatePresence>
          {notifications.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col items-center justify-center gap-2"
            >
              <Bell size={48} className="text-gray-400" />
              <span className="text-sm text-gray-400 font-medium italic">
                No notifications
              </span>
            </motion.div>
          ) : (
            <motion.div layout className="grid gap-2">
              {notifications.map((item) => (
                <NotificationCard
                  key={item._id}
                  data={item}
                  onDelete={deleteNotification}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Notifications;

/* ================= Notification Card ================= */

const NotificationCard = ({ data, onDelete }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.2 }}
      className="relative p-3 rounded-md border border-gray-200 bg-gray-50
                 hover:bg-gray-100 group"
    >
      {/* Delete Button */}
      <button
        onClick={() => onDelete(data._id)}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100
                   transition-opacity"
      >
        <X size={14} className="text-gray-400 hover:text-red-500" />
      </button>

      <h3 className="text-sm font-semibold text-gray-700 capitalize">
        {data.title}
      </h3>
      <p className="mt-0.5 text-sm text-gray-500 leading-snug">
        {data.message}
      </p>
    </motion.div>
  );
};
