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

const HomePage = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  /* ===== Loading State ===== */
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white">
        <span className="text-sm text-gray-500 animate-pulse">
          Loading application...
        </span>
      </div>
    );
  }

  /* ===== Auth Guard ===== */
  if (isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="w-screen h-screen flex bg-[url(/bg-2.png)] bg-cover bg-top overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Primary Navigation (Messages, Status, Saved, etc.) */}
      <NavigateTabs />

      {/* Secondary Navigation / Content */}
      <NavigateTabs2 />

      <StatusViewer />
      <AudioCallCard />
      <VideoCallCard />
    </main>
  );
};

export default HomePage;
