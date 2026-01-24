import React, { useState } from "react";
import { Bell, X } from "lucide-react";

const Notifications = () => {
  let n = [
    {
      _id: 1,
      title: "Tile",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cumque vitae nam, et est quasi modi placeat veritatis necessitatibus eos doloribus.",
    },
    {
      _id: 2,
      title: "Tile",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cumque vitae nam, et est quasi modi placeat veritatis necessitatibus eos doloribus.",
    },
    {
      _id: 3,
      title: "Tile",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cumque vitae nam, et est quasi modi placeat veritatis necessitatibus eos doloribus.",
    },
    {
      _id: 4,
      title: "Tile",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cumque vitae nam, et est quasi modi placeat veritatis necessitatibus eos doloribus.",
    },
    {
      _id: 5,
      title: "Tile",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cumque vitae nam, et est quasi modi placeat veritatis necessitatibus eos doloribus.",
    },
    {
      _id: 6,
      title: "Tile",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cumque vitae nam, et est quasi modi placeat veritatis necessitatibus eos doloribus.",
    },
  ];

  const [noti, setNoti] = useState(n);
  const deleteNotification = (id) => {
    console.log(id);
    console.log(noti);
    let n = noti.filter((i) => i._id != id);
    console.log(n);
    setNoti(n);
  };

  return (
    <div className="h-full flex flex-col ">
      <div className="p-2 font-semibold text-2xl text-gray-800">
        Notifications
      </div>
      <div className="flex-1 p-2 overflow-y-auto">
        {noti.length == 0 ? (
          <div className="flex-1 h-full flex flex-col justify-center items-center gap-2">
            <Bell size={50} className="text-gray-500" />
            <span className="text-sm text-gray-400 font-semibold italic">
              No Notifications
            </span>
          </div>
        ) : (
          <div className="grid gap-2">
            {noti?.map((i, idx) => (
              <Card
                key={idx}
                data={i}
                deleteNotification={deleteNotification}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;

const Card = ({ data, deleteNotification }) => {
  return (
    <>
      <div className="border border-gray-300 p-2 rounded-md bg-gray-50 relative cursor-default group">
        <button
          className="float-end abso lute top-1 right-1 invisible group-hover:visible cursor-pointer"
          onClick={() => deleteNotification(data._id)}
        >
          <X size={14} className="text-gray-400" />
        </button>
        <h3 className="font-semibold text-gray-600 text-sm capitalize">
          title
        </h3>
        <p className="text-sm text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cumque
          vitae nam, et est quasi modi placeat veritatis necessitatibus eos
          doloribus.
        </p>
      </div>
    </>
  );
};
