import { Edit } from "lucide-react";
import React, { useState } from "react";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="h-full flex flex-col cursor-default ">
      <div className="py-2 px-4 font-semibold text-2xl text-gray-800 border-b border-gray-200">
        Profile
      </div>
      <div className="flex-1 py-2 px-8  overflow-y-auto relative">
        <button
          className="absolute bottom-4 right-4 p-4 hover:bg-green-600 rounded-full  bg-green-500 text-white"
          onClick={() => setIsEdit((p) => !p)}
        >
          <Edit size={22} />
        </button>
        <form action="" className="w-md">
          <label>Name</label>
          <input
            type="text"
            name=""
            id=""
            disabled={!isEdit}
            className={`w-full h-8 px-2 mb-2   rounded-md outline-0 ${
              isEdit
                ? "border-2 border-gray-500 focus:ring-2 ring-neutral-400"
                : "border border-gray-200"
            }`}
          />
          <label>Nick name</label>
          <input
            type="text"
            name=""
            id=""
            disabled={!isEdit}
            className={`w-full h-8 px-2 mb-2   rounded-md outline-0 ${
              isEdit
                ? "border-2 border-gray-500 focus:ring-2 ring-neutral-400"
                : "border border-gray-200"
            }`}
          />
          <label>Email</label>
          <input
            type="text"
            name=""
            id=""
            disabled={!isEdit}
            className={`w-full h-8 px-2 mb-2   rounded-md outline-0 ${
              isEdit
                ? "border-2 border-gray-500 focus:ring-2 ring-neutral-400"
                : "border border-gray-200"
            }`}
          />
          <label>phone</label>
          <input
            type="text"
            name=""
            id=""
            disabled={!isEdit}
            className={`w-full h-8 px-2 mb-2   rounded-md outline-0 ${
              isEdit
                ? "border-2 border-gray-500 focus:ring-2 ring-neutral-400"
                : "border border-gray-200"
            }`}
          />
          <label>Bio</label>
          <input
            type="text"
            name=""
            id=""
            disabled={!isEdit}
            className={`w-full h-8 px-2 mb-2   rounded-md outline-0 ${
              isEdit
                ? "border-2 border-gray-500 focus:ring-2 ring-neutral-400"
                : "border border-gray-200"
            }`}
          />
          <label>Name</label>
          <input
            type="text"
            name=""
            id=""
            disabled={!isEdit}
            className={`w-full h-8 px-2 mb-2   rounded-md outline-0 ${
              isEdit
                ? "border-2 border-gray-500 focus:ring-2 ring-neutral-400"
                : "border border-gray-200"
            }`}
          />
          <label>Name</label>
          <input
            type="text"
            name=""
            id=""
            disabled={!isEdit}
            className={`w-full h-8 px-2 mb-2   rounded-md outline-0 ${
              isEdit
                ? "border-2 border-gray-500 focus:ring-2 ring-neutral-400"
                : "border border-gray-200"
            }`}
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
