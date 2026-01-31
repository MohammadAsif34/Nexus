import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

import Info from "../../components/component/Info";
import ChatSection from "../../components/chat-section/ChatSection";
import Profile from "../../components/navigation/settings/options/Profile";
import Notification from "../../components/navigation/settings/options/Notification";
import Privacy from "../../components/navigation/settings/options/Privacy";
import Security from "../../components/navigation/settings/options/Security";
import Help from "../../components/navigation/settings/options/Help";
import Darkmode from "../../components/navigation/settings/options/Darkmode";

/* ===== Component Registry ===== */
const TAB_COMPONENTS = {
  info: Info,
  chat: ChatSection,
  profile: Profile,
  notification: Notification,
  privacy: Privacy,
  security: Security,
  help: Help,
  darkmode: Darkmode,
};

const NavigateTabs2 = () => {
  const activeTab = useSelector((s) => s.tabs.tabs2);
  const { user } = useAuth0();

  const ActiveComponent = TAB_COMPONENTS[activeTab] || Info;

  return (
    <section className="flex-1 h-screen pt-3 pr-4 pb-2 bg-gr een-50">
      <div
        className="h-full overflow-hidden rounded-xl
                      border border-gray-200
                      bg-white/10 backdrop-blur
                      shadow-sm"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-full"
          >
            {/* Default info panel */}
            {activeTab === "info" ? <Info user={user} /> : <ActiveComponent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NavigateTabs2;
