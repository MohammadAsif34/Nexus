import React from "react";
import Status from "../../components/navigation/status/Status";
import Saved from "../../components/navigation/saveds/Saved";
import Notifications from "../../components/navigation/notifications/Notifications";
import Settings from "../../components/navigation/settings/Settings";
import Messages from "../../components/navigation/messages/Messages";
import { useSelector } from "react-redux";

const NavigateTabs = () => {
  const tabs = useSelector((s) => s.tabs.tabs);
  return (
    <div className="w-96 h-screen  px-2 bg-white/10 backdrop-blur z-0">
      {tabs == "messages" && <Messages />}
      {tabs == "status" && <Status />}
      {tabs == "saveds" && <Saved />}
      {tabs == "notifications" && <Notifications />}
      {tabs == "settings" && <Settings />}
      {/* {tabs == "message" && <UserList />} */}
    </div>
  );
};

export default NavigateTabs;
