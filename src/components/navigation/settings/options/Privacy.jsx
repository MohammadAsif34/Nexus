import React from "react";

const Privacy = () => {
  return (
    <div className="h-full flex flex-col cursor-default ">
      <div className="py-2 px-4 font-semibold text-2xl text-gray-800 border-b border-gray-200">
        Privacy
      </div>
      <div className="flex-1  py-4 px-8  overflow-y-auto  ">
        <form action="" className="w-md">
          <div className="py-3 flex justify-between gap-4">
            <label>Profile Photo</label>
            <select
              name=""
              id=""
              className="px-2 py-1 border border-gray-300 rounded-sm"
            >
              <option value="">Everyone</option>
              <option value="">Contact</option>
              <option value="">Nobody</option>
            </select>
          </div>
          <div className="py-3 flex justify-between gap-4">
            <label>Status</label>
            <select
              name=""
              id=""
              className="px-2 py-1 border border-gray-300 rounded-sm"
            >
              <option value="">Everyone</option>
              <option value="">Contact</option>
              <option value="">Nobody</option>
            </select>
          </div>
          <div className="py-3 flex justify-between gap-4">
            <label>Last Seen</label>
            <select
              name=""
              id=""
              className="px-2 py-1 border border-gray-300 rounded-sm"
            >
              <option value="">Everyone</option>
              <option value="">Contact</option>
              <option value="">Nobody</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Privacy;
