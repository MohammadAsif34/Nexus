import React, { useState } from "react";

const Notification = () => {
  return (
    <div className="h-full flex flex-col cursor-default bg-white/50 backdrop-blur-2xl ">
      {/* <div className="py-2 px-4 font-semibold text-2xl text-gray-800 border-b border-gray-200"> */}
      <div className="max -w-md  rounded-xl shad not-visited:ow-lg p-5">
        <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>

        {/* Messages */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase">
            Messages
          </h3>

          <SettingRow label="Message notifications" />
          <SettingRow label="Message preview" />
          <SettingRow label="Sound" />
          <SettingRow label="Vibration" />
        </div>

        {/* Stories */}
        <div className="space-y-4 mt-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase">
            Stories
          </h3>

          <SettingRow label="New story alerts" />
          <SettingRow label="Muted stories" />
        </div>

        {/* Other */}
        <div className="space-y-4 mt-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Other</h3>

          <SettingRow label="Message requests" />
          <SettingRow label="App notifications" />
        </div>
        {/* </div> */}
      </div>
      <div className="flex-1 p-4 overflow-y-auto"></div>
    </div>
  );
};

export default Notification;

function SettingRow({ label }) {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <span className=" text-gray-700">{label}</span>

      {/* Toggle Switch */}
      <div
        className={`w-11 h-6 ${isToggle ? "bg-blue-400" : "bg-gray-300"} rounded-full relative cursor-pointer`}
        onClick={() => setIsToggle((p) => !p)}
      >
        <div
          className={`absolute top-0.5 ${isToggle ? "right-0.5" : "left-0.5"} w-5 h-5 bg-white rounded-full shadow`}
        />
      </div>
    </div>
  );
}
