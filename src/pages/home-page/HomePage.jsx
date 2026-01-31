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
      <div className="w-screen h-screen flex  flex-col items-center justify-center gap-2 bg-[url(/bg-0.jpg)] bg-no-repeat bg-center bg-cover ">
        <div className="relative w-20 h-20 p-4">
          <img
            src="/logo.png"
            alt=""
            className="w-full h-full  object-contain"
          />
          <div className="w-20 h-20 absolute top-0 left-0 border-4 border-gray-300 border-t-transparent rounded-full p-4 flex justify-center items-center animate-spin delay-500"></div>
        </div>
        <p className="text-xl text-gray-400 animate-pulse">
          Loading
          <span className="px-1 inline-block animate-bounce">.</span>
          <span className="px-1 inline-block animate-bounce [animation-delay:0.1s]">
            .
          </span>
          <span className="px-1 inline-block animate-bounce [animation-delay:0.2s]">
            .
          </span>
          <span className="px-1 inline-block animate-bounce [animation-delay:0.1s]">
            .
          </span>
        </p>
      </div>
    );
  }

  /* ===== Auth Guard ===== */
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="w-screen h-screen flex bg-[url(/bg-0.jpg)] bg-no-repeat bg-center bg-cover overflow-hidden">
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
