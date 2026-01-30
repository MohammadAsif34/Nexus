import React from "react";
import {
  Bookmark,
  Ellipsis,
  EllipsisVertical,
  File,
  InfoIcon,
  PhoneOutgoing,
  Search,
  Send,
  Video,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Info from "../../components/component/Info";
import { startCall } from "../../redux/slice/callSlice";
// import { openMediaViewer } from "../../redux/slice/mediaViewer"; // optional

/* ================= MAIN ================= */

const ChatSection = () => {
  const currChat = useSelector((s) => s.currChat.chat);

  if (!currChat) {
    return <Info />;
  }

  return (
    <div className="h-full flex flex-col bg-white">
      <ChatHeader chat={currChat} />
      <ChatMessages />
      <ChatSender />
    </div>
  );
};

export default ChatSection;

/* ================= HEADER ================= */

const ChatHeader = ({ chat }) => {
  const dispatch = useDispatch();
  return (
    <div className="h-16 px-4 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-300">
          <img
            src="/default_avatar.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="font-semibold text-gray-800">{chat.name || "User"}</p>
          <span className="text-xs text-green-500">online</span>
        </div>
      </div>

      <div className="flex gap-5 text-gray-600">
        <button className=" p-2 rounded-full hover:bg-gray-300  transition-all duration-75">
          <Search size={20} />
        </button>
        <button
          className=" p-2 rounded-full hover:bg-gray-300  transition-all duration-75"
          onClick={() => dispatch(startCall({ type: "audio", user: chat }))}
        >
          <PhoneOutgoing size={20} />
        </button>
        <button
          className=" p-2 rounded-full hover:bg-gray-300  transition-all duration-75"
          onClick={() => dispatch(startCall({ type: "video", user: chat }))}
        >
          <Video size={20} />
        </button>
        <button className=" p-2 rounded-full hover:bg-gray-300  transition-all duration-75">
          <Bookmark size={20} />
        </button>
        <button className=" p-2 rounded-full hover:bg-gray-300  transition-all duration-75">
          <InfoIcon size={20} />
        </button>
        <button className=" p-2 rounded-full hover:bg-gray-300  transition-all duration-75">
          <EllipsisVertical size={20} />
        </button>
      </div>
    </div>
  );
};

/* ================= MESSAGES ================= */

const ChatMessages = () => {
  const dispatch = useDispatch();
  const myId = "user_1";

  const chat = [
    {
      id: "1",
      senderId: "user_2",
      type: "text",
      text: "Hi, how are you?",
      timestamp: "2026-01-23T10:00:10Z",
    },
    {
      id: "2",
      senderId: "user_1",
      type: "text",
      text: "I’m good! What about you?",
      timestamp: "2026-01-23T10:00:30Z",
    },
    {
      id: "3",
      senderId: "user_2",
      type: "photo",
      text: "asdjks",
      url: "https://picsum.photos/300/200",
      timestamp: "2026-01-23T10:01:00Z",
    },
    {
      id: "4",
      senderId: "user_1",
      type: "file",
      fileName: "project-report.pdf",
      fileSize: "1.2 MB",
      timestamp: "2026-01-23T10:01:40Z",
    },
  ];

  const openMedia = (type, data) => {
    console.log("OPEN MEDIA:", type, data);
    // dispatch(openMediaViewer({ type, data }));
  };

  return (
    <div className="flex-1 px-4 py-2 overflow-y-auto bg-gray-5">
      <div className="flex flex-col gap-2">
        {chat.map((msg) => (
          <MessageBubble
            key={msg.id}
            msg={msg}
            isMine={msg.senderId === myId}
            onOpenMedia={openMedia}
          />
        ))}
      </div>
    </div>
  );
};

/* ================= MESSAGE BUBBLE ================= */

const MessageBubble = ({ msg, isMine, onOpenMedia }) => {
  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] rounded-lg px-3 py-2 text-sm
        ${isMine ? "bg-green-200" : "bg-gray-100 border border-gray-200"}`}
      >
        {msg.type === "text" && <p>{msg.text}</p>}

        {msg.type === "photo" && (
          <>
            <img
              src={msg.url}
              alt=""
              className="rounded-md cursor-pointer"
              onClick={() => onOpenMedia("photo", msg.url)}
            />
            <p className="pt-1">{msg?.text}</p>
          </>
        )}

        {msg.type === "file" && (
          <div
            className="flex items-center gap-2 cursor-pointer text-blue-600"
            onClick={() => onOpenMedia("file", msg)}
          >
            <div className="p-3 bg-green-100 rounded-md">
              <p className="">
                <File className="inline mr-2 text-black" />
                {msg.fileName}
              </p>
              <p>
                <span className="text-xs float-end text-gray-400">
                  ({msg.fileSize})
                </span>
              </p>
            </div>
          </div>
        )}

        <span className="block mt-1 text-[10px] text-gray-500 text-right">
          {formatTime(msg.timestamp)}
        </span>
      </div>
    </div>
  );
};

/* ================= SENDER ================= */

const ChatSender = () => {
  return (
    <div className="h-14 px-4 border-t border-gray-200 flex items-center gap-3">
      <button className="p-2 hover:bg-gray-200 rounded-full">
        <Ellipsis size={20} />
      </button>

      <form className="flex-1 flex gap-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 h-9 px-3 rounded-md border border-gray-300 text-sm focus:outline-none"
        />
        <button
          type="submit"
          className="px-3 bg-green-500 rounded-md text-white"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

/* ================= UTIL ================= */

const formatTime = (ts) => {
  const d = new Date(ts);
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  const p = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  return `${h}:${m} ${p}`;
};
