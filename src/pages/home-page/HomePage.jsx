import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Sidebar from "../../components/sidebar/Sidebar";
import NavigateTabs from "../../layouts/tabs/NavigateTabs";
import NavigateTabs2 from "../../layouts/tabs/NavigateTabs2";
import StatusViewer from "../../components/component/StatusViewer";
import CallingCard from "../../components/component/AudioCallCard";
import AudioCallCard from "../../components/component/AudioCallCard";
import VideoCallCard from "../../components/component/VideoCallCard";
import Loading from "../../components/component/Loading";
import { useSelector } from "react-redux";
import AddNewUser from "../../components/component/AddNewUser";

const HomePage = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const user = useSelector((s) => s.user);
  const tabs = useSelector((s) => s.tabs);
  console.log("user auth:: ", user.isAuthenticated);
  console.log(tabs);

  /* ===== Loading State ===== */
  if (isLoading) {
    return <Loading />;
  }

  /* ===== Auth Guard ===== */
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }
  if (!user.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="w-screen h-screen flex bg-[url(/bg-00.png)] bg-no-repeat bg-center bg-cover overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      {/* Primary Navigation (Messages, Status, Saved, etc.) */}
      <NavigateTabs />
      {/* Secondary Navigation / Content */}
      <NavigateTabs2 />

      {/* ================ Top Tabs =============  */}
      <StatusViewer />
      <AudioCallCard />
      <VideoCallCard />
      <AddNewUser />
    </main>
  );
};

export default HomePage;
