import { CircleDotDashed, Plus } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { openStatusViewer } from "../../../redux/slice/viewStatus";

const Status = () => {
  let statuses = [
    {
      id: 1,
      name: "My Status",
      read: false,
      picture: "https://i.pravatar.cc/100?img=11",
      isMine: true,
    },
    {
      id: 2,
      name: "Rahul",
      read: true,
      picture: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 3,
      name: "Anjali",
      read: false,
      picture: "https://i.pravatar.cc/100?img=13",
    },
    {
      id: 4,
      name: "Amit",
      read: false,
      picture: "https://i.pravatar.cc/100?img=14",
    },
    {
      id: 5,
      name: "Neha",
      read: false,
      picture: "https://i.pravatar.cc/100?img=15",
    },
  ];
  statuses = [...statuses].sort((a, b) => {
    return a.read - b.read;
  });

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
        <div className="w-full max-w-sm py-4 bg -white rou nded-xl sh adow-lg">
          {/* Header */}

          {/* =============== create status ================  */}
          <div className="m overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-3  border-gray-200 hover:bg-white/70 rounded-xl cursor-no-drop">
              <div className="flex items-center gap-3">
                <div className="p-4 bg-gray-200 rounded-full">
                  <Plus size={22} />
                </div>
                <p className="text-sm font-medium text-gray-800">
                  Add to your Story
                </p>
              </div>
            </div>
            <hr className="text-white mt-1" />

            {/* =========== status list ================  */}
            {statuses.map((status, idx) => (
              <StatusCard
                key={status._id || idx}
                statuses={statuses}
                status={status}
                idx={idx}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;

const StatusCard = ({ statuses, status, idx }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="flex items-center justify-between my-1.5 px-4 py-3 bg-white/50 backdrop-blur-2xl rounded-lg hover:bg-white/70 cursor-pointer"
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
          <div
            className={`p-0.5  ${!status.read && "border-[3px] border-green-500"}  rounded-full`}
          >
            <img
              src={status.picture}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800">{status.name}</p>
            <span className="text-xs text-gray-400">{status?.nickname}</span>
          </div>
        </div>

        <span className="text-gray-400 text-xs">5:31 pm</span>
      </div>
    </>
  );
};
