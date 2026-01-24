import React from "react";
import { useSelector } from "react-redux";
import Info from "../../components/component/Info";
import ChatSection from "../../components/chat-section/ChatSection";
import Settings from "../../components/navigation/settings/Settings";
import Profile from "../../components/navigation/settings/options/Profile";
import Notification from "../../components/navigation/settings/options/Notification";
import Privacy from "../../components/navigation/settings/options/Privacy";
import Security from "../../components/navigation/settings/options/Security";
import Help from "../../components/navigation/settings/options/Help";
import Darkmode from "../../components/navigation/settings/options/Darkmode";
import { useAuth0 } from "@auth0/auth0-react";

const NavigateTabs2 = () => {
  const tabs2 = useSelector((s) => s.tabs.tabs2);
  const { user } = useAuth0();

  return (
    <div className="flex-1 h-screen overflow-y-auto  p-4 pl-2 bg-gre en-50">
      <div className=" overflow-hidden border border-gray-200 h-full rounded-xl bg-white/10 backdrop-blur-[2px] shadow-sm">
        {tabs2 == "info" && <p>{JSON.stringify(user)}</p>}
        {/* {tabs2 == "info" && <Info />} */}
        {tabs2 == "chat" && <ChatSection />}
        {tabs2 == "profile" && <Profile />}
        {tabs2 == "notification" && <Notification />}
        {tabs2 == "privacy" && <Privacy />}
        {tabs2 == "security" && <Security />}
        {tabs2 == "help" && <Help />}
        {tabs2 == "darkmode" && <Darkmode />}
      </div>
    </div>
  );
};

export default NavigateTabs2;
