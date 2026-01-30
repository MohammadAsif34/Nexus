import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import Messages from "../../components/navigation/messages/Messages";
import Status from "../../components/navigation/status/Status";
import Saved from "../../components/navigation/saveds/Saved";
import Notifications from "../../components/navigation/notifications/Notifications";
import Settings from "../../components/navigation/settings/Settings";

/* ===== Tab Registry ===== */
const TAB_COMPONENTS = {
  messages: Messages,
  status: Status,
  saveds: Saved,
  notifications: Notifications,
  settings: Settings,
};

const NavigateTabs = () => {
  const activeTab = useSelector((s) => s.tabs.tabs);
  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <aside className="w-96 h-screen px-2 bg-white/10 backdrop-blur z-0 overflow-hidden">
      <AnimatePresence mode="wait">
        {ActiveComponent && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-full"
          >
            <ActiveComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default NavigateTabs;
