import React from "react";

const Info = () => {
  return (
    <div className="flex-1 py-32 text-center bg-white/10 p-5">
      <div>
        {/* Header */}
        <div className="mb-4">
          <div className="w-32 h-32  mx-auto p-3 border-4 border-green-500 rounded-full flex justify-center items-center">
            <img src="/logo.png" alt="" className="   object-cover  " />
          </div>
          <h1 className="text-4xl py-2 font-bold tracking-wide text-gray-800">
            NEXUS
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            A Modern Real-Time Chat Application
          </p>
        </div>

        {/* Description */}
        <p className="text-sm px-[20%] text-gray-600 leading-relaxed mb-6">
          NEXUS is a fast, secure, and scalable real-time chat web application
          built to deliver seamless communication. Designed with performance and
          usability in mind, it provides instant messaging through a clean,
          intuitive interface inspired by industry-leading platforms like
          WhatsApp Web.
        </p>

        {/* Features */}
        <div className="text-center">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Core Features
          </h2>

          <ul className="space-y-2 text-sm text-gray-600 flex flex-col items-center">
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Real-time messaging powered by WebSocket / Socket.IO
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Online and offline user presence indicators
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Unread message counters with message previews
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Optimized image loading with lazy-loaded avatars
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Human-readable timestamps with AM/PM formatting
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Fully responsive UI optimized for desktop and mobile
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-3 border-t border-gray-100 text-xs text-gray-500">
          Built using modern web technologies with a focus on performance,
          scalability, and user experience.
        </div>
      </div>
    </div>
  );
};

export default Info;
