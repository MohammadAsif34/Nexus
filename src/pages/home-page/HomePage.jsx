import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import ChatSection from "../../components/chat-section/ChatSection";
import UserList from "../../components/navigation/messages/Messages";
import NavigateTabs from "../../layouts/tabs/NavigateTabs";
import NavigateTabs2 from "../../layouts/tabs/NavigateTabs2";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [tabs, setTabs] = useState("messages");
  const [tabs2, setTabs2] = useState(null);

  if (isLoading) {
    return <p>Loading.....</p>;
  }
  // if (!isAuthenticated) {
  //   console.log("Not Auth");
  //   return;
  // }

  return (
    <main className="w-screen h-screen flex bg-[url(/bg-2.png)] bg-cover object-top z-10">
      <Sidebar tabs={tabs} setTabs={setTabs} />
      <NavigateTabs tabs={tabs} setTabs2={setTabs2} />
      {/* <UserList /> */}
      {/* <ChatSection /> */}
      <NavigateTabs2 tabs2={tabs2} />
    </main>
  );
};

export default HomePage;
