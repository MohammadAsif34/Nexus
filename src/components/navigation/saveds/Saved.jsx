import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Image, MessageSquare, Search, Logs } from "lucide-react";
import { useSelector } from "react-redux";

/* ===== Tabs Config ===== */
const TABS = [
  { id: "all", label: "All", icon: Logs },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "files", label: "Files", icon: FileText },
  { id: "photos", label: "Photos", icon: Image },
];

const Saved = () => {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const { saved } = useSelector((s) => s.saved);

  return (
    <section className="h-full flex flex-col ">
      <div className="p-2 text-2xl font-semibold text-gray-800 ">Saved</div>
      {/* <div className="bg-white rounded-xl shadow"> */}
      {/* ===== Header ===== */}

      <div className=" flex flex-col py-2">
        {/* ===== Search ===== */}
        <div className="px-2 ">
          <div>
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search saved ${active}`}
                className="w-full h-9 pl-9 pr-3  text-sm
                border border-gray-300 rounded-full bg-white
                focus:outline-none focus:ring-1 focus:ring-green-400"
              />
            </div>
          </div>

          {/* ===== Tabs ===== */}
          <div className="flex gap-2 px-2 py-2 border-b border-gray-200">
            {TABS.map(({ id, label, icon: Icon }) => (
              <TabButton
                key={id}
                active={active === id}
                onClick={() => setActive(id)}
                icon={<Icon size={16} />}
              >
                {label}
              </TabButton>
            ))}
          </div>
        </div>
      </div>
      {/* ===== Content ===== */}
      <div className="flex-1 overflow-y-auto custom-scroll px-2 py-1 bg- white shadow rounded-xl">
        <AnimatePresence mode="wait">
          {active === "all" && (
            <>
              {/* <div className="flex-1 h-96 overflow-y-auto"> */}
              {saved.map((msg) => (
                <MessageBubble key={msg._id} msg={msg} />
              ))}
              {/* </div> */}
              {/* <div>{JSON.stringify(saved)}</div> */}
            </>
          )}
          {active === "messages" && <SavedMessages query={query} />}
          {active === "files" && <SavedFiles query={query} />}
          {active === "photos" && <SavedPhotos query={query} />}
        </AnimatePresence>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Saved;

/* ================= Tab Button ================= */

const TabButton = ({ children, icon, active, onClick }) => (
  <motion.button
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    className={`relative px-2.5 py-1.5 text-sm font-semibold rounded-full
      flex items-center gap-1.5 transition
      ${
        active
          ? "text-gray-500 bg-white"
          : "text-gray-500 hover:bg-gray-100"
      }`}
  >
    {icon}
    {children}

    {active && (
      <motion.span
        layoutId="savedTab"
        className="absolute inset-0 rounded-full border border-gray-400"
      />
    )}
  </motion.button>
);

/* ================= Saved Types ================= */

const SavedMessages = ({ query }) => (
  <AnimatedEmpty
    title="No saved messages"
    subtitle={`No results for "${query}"`}
    showQuery={query}
    Icon={MessageSquare}
  />
);

const SavedFiles = ({ query }) => (
  <AnimatedEmpty
    title="No saved files"
    subtitle={`No results for "${query}"`}
    showQuery={query}
    Icon={FileText}
  />
);

const SavedPhotos = ({ query }) => (
  <AnimatedEmpty
    title="No saved photos"
    subtitle={`No results for "${query}"`}
    showQuery={query}
    Icon={Image}
  />
);

/* ================= Empty State ================= */

const AnimatedEmpty = ({ Icon, title, subtitle, showQuery }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.25 }}
    className="h-full flex flex-col items-center justify-center gap-2 text-center"
  >
    <motion.div
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-gray-400"
    >
      <Icon size={48} />
    </motion.div>

    <p className="text-sm font-semibold text-gray-600">{title}</p>

    {showQuery ? (
      <span className="text-xs text-gray-400">{subtitle}</span>
    ) : (
      <span className="text-xs text-gray-400">
        Saved items will appear here
      </span>
    )}
  </motion.div>
);

// ================= MEssage Bubble ==============
const MessageBubble = ({ msg, isMine, onOpenMedia }) => {
  return (
    <div
      className={` my-1 rounded-lg px-3 py-2 text-sm shadow
         "bg-gray-100 border border-gray-200`}
    >
      {msg.type === "text" && <p>{msg.text}</p>}

      {msg.type === "photo" && (
        <>
          <img
            src={msg.url}
            alt=""
            className="w-full h-full rounded-md cursor-pointer"
            // onClick={() => onOpenMedia("photo", msg.url)}
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
        {/* {formatTime(msg.timestamp)} */}
      </span>
    </div>
  );
};
