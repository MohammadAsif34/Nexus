import React from "react";

import {
  Bookmark,
  Ellipsis,
  EllipsisVertical,
  InfoIcon,
  PhoneOutgoing,
  Search,
  Send,
  Video,
} from "lucide-react";
import { useSelector } from "react-redux";
import Info from "../../components/component/Info";

const ChatSection = () => {
  const currChat = useSelector((s) => s.currChat.chat);
  if (currChat == null) {
    return <Info />;
  }
  return (
    <div className="h-full  flex flex-col ">
      <ChatHeader chat={currChat} />
      <ChatMessage />
      <ChatSender />
    </div>
  );
};

export default ChatSection;

const ChatHeader = ({ chat }) => {
  return (
    <>
      <div className="h-16 px-4 border-b border-gray-200 flex items-center justify-between bg-white">
        <div className="flex  items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-green-300">
            <img
              src="/default_avatar.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className=" font-semibold text-lg">
            {chat.name || "Etta McDaniel"}
          </p>{" "}
          <span className="ml-2 text-[10px] p-1 bg-green-200 leading-2 rounded-sm text-green-500">
            online
          </span>
        </div>
        <div className="flex gap-8 items-center">
          <button>
            <Search size={18} />
          </button>
          <button>
            <PhoneOutgoing size={18} />
          </button>
          <button>
            <Video size={18} />
          </button>
          <button>
            <Bookmark size={18} />
          </button>
          <button>
            <InfoIcon size={18} />
          </button>
          <button>
            <EllipsisVertical size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

const ChatSender = () => {
  return (
    <>
      <div className="px-4 h-14 border-b border-gray-300 flex items-center gap-6 bg-white">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Ellipsis size={18} />
        </button>

        <form className="flex-1 flex gap-4 ">
          <input
            type="text"
            name=""
            id=""
            className="w-full h-8 px-2 text-sm text-gray-600 rounded-sm border border-gray-300 focus:outline-1"
          />
          <button
            type="submit"
            className="p-2 bg-green-500  rounded-sm text-white"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

const ChatMessage = () => {
  const id = "user_1";
  const chat = [
    {
      id: "msg_2",
      senderId: "user_2",
      text: "Hi, how are you?",
      type: "text",
      timestamp: "2026-01-23T10:00:10Z",
    },
    {
      id: "msg_1",
      senderId: "user_1",
      text: "Hey!",
      type: "text",
      timestamp: "2026-01-23T10:00:01Z",
    },
    {
      id: "msg_3",
      senderId: "user_1",
      text: "I’m good. What about you?",
      type: "text",
      timestamp: "2026-01-23T10:00:25Z",
    },
    {
      id: "msg_4",
      senderId: "user_2",
      text: "Doing well 👍",
      type: "text",
      timestamp: "2026-01-23T10:00:40Z",
    },
    {
      id: "msg_5",
      senderId: "user_1",
      text: "Are you free today?",
      type: "text",
      timestamp: "2026-01-23T10:01:05Z",
    },
    {
      id: "msg_6",
      senderId: "user_2",
      text: "Yes, after 6 PM",
      type: "text",
      timestamp: "2026-01-23T10:01:30Z",
    },
    {
      id: "msg_7",
      senderId: "user_1",
      text: "Let’s catch up then",
      type: "text",
      timestamp: "2026-01-23T10:01:55Z",
    },
    {
      id: "msg_8",
      senderId: "user_2",
      text: "Sure!",
      type: "text",
      timestamp: "2026-01-23T10:02:10Z",
    },
    {
      id: "msg_9",
      senderId: "user_1",
      text: "Did you finish the project?",
      type: "text",
      timestamp: "2026-01-23T10:02:40Z",
    },
    {
      id: "msg_10",
      senderId: "user_2",
      text: "Almost done",
      type: "text",
      timestamp: "2026-01-23T10:03:00Z",
    },
    {
      id: "msg_11",
      senderId: "user_1",
      text: "Need any help?",
      type: "text",
      timestamp: "2026-01-23T10:03:20Z",
    },
    {
      id: "msg_12",
      senderId: "user_2",
      text: "Maybe with testing",
      type: "text",
      timestamp: "2026-01-23T10:03:45Z",
    },
    {
      id: "msg_13",
      senderId: "user_1",
      text: "I can help later",
      type: "text",
      timestamp: "2026-01-23T10:04:05Z",
    },
    {
      id: "msg_14",
      senderId: "user_2",
      text: "That would be great",
      type: "text",
      timestamp: "2026-01-23T10:04:30Z",
    },
    {
      id: "msg_15",
      senderId: "user_1",
      text: "Cool 😄",
      type: "text",
      timestamp: "2026-01-23T10:04:50Z",
    },
    {
      id: "msg_20",
      senderId: "user_2",
      text: "See you at 6",
      type: "text",
      timestamp: "2026-01-23T10:05:10Z",
    },
    {
      id: "msg_17",
      senderId: "user_1",
      text: "See you!",
      type: "text",
      timestamp: "2026-01-23T10:05:25Z",
    },
    {
      id: "msg_18",
      senderId: "user_2",
      text: "Take care",
      type: "text",
      timestamp: "2026-01-23T10:05:40Z",
    },
    {
      id: "msg_19",
      senderId: "user_1",
      text: "You too 👍",
      type: "text",
      timestamp: "2026-01-23T10:06:00Z",
    },
    {
      id: "msg_20",
      senderId: "user_2",
      text: "Bye!",
      type: "text",
      timestamp: "2026-01-23T10:06:15Z",
    },
  ];
  return (
    <>
      <div className="flex-1 px-4 border-b border-gray-300 overflow-auto">
        <div className="flex flex-col gap-1 py-1">
          {chat?.map((c, idx) => (
            <MessageCard chat={c} id={id} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

const MessageCard = ({ chat, id }) => {
  const t = chat.timestamp.split("T")[1].replace("Z", "");
  let [h, m] = t.split(":");
  const period = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  const time = `${h}:${m} ${period}`;

  return (
    <>
      <div className="">
        {chat.senderId == id ? (
          <div className="max-w-3/4 px-2 py-2 float-end text-en bg-gray-200 rounded-md">
            {chat.text +
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a
            veritatis eveniet voluptatem animi ipsam doloremque atque laudantium
            ut tenetur similique ab, repudiandae sit labore. Nemo totam animi
            blanditiis quo."
            `}
            <span className=" float-end text-xs translate-y-1 text-gray-400">
              {time}
              <span className="ml-2">{"sent"}</span>
            </span>
          </div>
        ) : (
          <div className="max-w-3/4 p-2 float-start bg-gray-200 rounded-md">
            {chat.text +
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a
              veritatis eveniet voluptatem animi ipsam doloremque atque laudantium
              ut tenetur similique ab, repudiandae sit labore. Nemo totam animi
              blanditiis quo."
              `}
            <span className=" float-end text-xs translate-y-1 text-gray-400">
              {time}
              <span className="ml-2">{"sent"}</span>
            </span>
          </div>
        )}
      </div>
    </>
  );
};
