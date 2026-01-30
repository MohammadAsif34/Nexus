import { CircleDotDashed } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { openStatusViewer } from "../../../redux/slice/viewStatus";

const Status = () => {
  const statuses = [
    {
      id: 1,
      name: "My Status",
      avatar: "https://i.pravatar.cc/100?img=11",
      isMine: true,
    },
    {
      id: 2,
      name: "Rahul",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 3,
      name: "Anjali",
      avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
      id: 4,
      name: "Amit",
      avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
      id: 5,
      name: "Neha",
      avatar: "https://i.pravatar.cc/100?img=15",
    },
  ];
  const likes = [
    {
      id: 1,
      name: "Md Asif",
      username: "@mdasif",
      avatar: "https://i.pravatar.cc/100?img=21",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      username: "@rahul",
      avatar: "https://i.pravatar.cc/100?img=22",
    },
    {
      id: 3,
      name: "Anjali Singh",
      username: "@anjali",
      avatar: "https://i.pravatar.cc/100?img=23",
    },
    {
      id: 4,
      name: "Amit Verma",
      username: "@amit",
      avatar: "https://i.pravatar.cc/100?img=24",
    },
  ];

  const dispatch = useDispatch();
  return (
    <div className="h-full flex flex-col ">
      <div className="p-2 font-semibold text-2xl text-gray-800">Status</div>
      {!statuses ? (
        <div className="flex-1 flex flex-col justify-center items-center gap-2">
          <CircleDotDashed size={50} className="text-gray-500" />
          <span className="text-sm text-gray-400 font-semibold italic">
            No Status
          </span>
        </div>
      ) : (
        <div className="w-full max-w-sm py-4 bg-white rounded-xl shadow-lg">
          {/* Header */}

          {/* List */}
          <div className="m overflow-y-auto">
            {statuses.map((status, idx) => (
              <div
                key={status.id}
                className="flex items-center justify-between px-4 py-3  hover:bg-gray-100 cursor-pointer"
                onClick={() =>
                  dispatch(
                    openStatusViewer({
                      statuses,
                      index: idx,
                    }),
                  )
                }
              >
                <div className="flex items-center gap-3">
                  <div className="p-0.5 border-[3px] border-green-500 rounded-full">
                    <img
                      src={status.avatar}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {status.name}
                    </p>
                    <span className="text-xs text-gray-400">
                      {status?.username}
                    </span>
                  </div>
                </div>

                <span className="text-gray-400 text-xs">5:31 pm</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;
