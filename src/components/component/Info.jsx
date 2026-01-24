import React from "react";

const Info = () => {
  return (
    <div className="flex-1 py-32 text-center bg-white/10  p-5">
      <div className=" ">
        {/* Header */}
        <div className="mb-3">
          <h1 className="text-4xl py-2 font-bold tracking-wide text-gray-800">
            NEXUS
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Real-Time Chat Web Application
          </p>
        </div>

        {/* Description */}
        <p className="text-sm px-[20%] text-gray-600 leading-relaxed mb-4">
          NEXUS is a modern real-time chat web application designed for fast,
          reliable, and seamless communication. It delivers instant messaging
          with an intuitive interface and optimized performance, inspired by
          platforms like WhatsApp Web.
        </p>

        {/* Features */}
        <div className="text-center">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Key Features
          </h2>

          <ul className="space-y-2 text-sm text-gray-600 text-center flex flex-col items-center">
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Real-time messaging using WebSocket / Socket.IO
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              User presence with online/offline indicators
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Message preview and unread message counter
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Lazy-loaded profile images for performance
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Timestamp formatting with AM/PM support
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">●</span>
              Responsive UI optimized for web and mobile
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-gray-100 text-xs text-gray-500">
          Built with modern web technologies for scalability and performance.
        </div>
      </div>
    </div>
  );
};

export default Info;
