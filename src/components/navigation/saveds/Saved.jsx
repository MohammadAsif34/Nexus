import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Image, MessageSquare, Search } from "lucide-react";

/* ===== Tabs Config ===== */
const TABS = [
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "files", label: "Files", icon: FileText },
  { id: "photos", label: "Photos", icon: Image },
];

const Saved = () => {
  const [active, setActive] = useState("messages");
  const [query, setQuery] = useState("");

  return (
    <section className="h-full flex flex-col ">
      {/* ===== Header ===== */}
      <div className="p-2 text-2xl font-semibold text-gray-800 ">
        Saved
      </div>

      <div className="flex-1 py-2 bg-white rounded-xl shadow">
        {/* ===== Search ===== */}
        <div className="px-4 py-2  ">
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
                       border border-gray-300 rounded-full
                       focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
        </div>

        {/* ===== Tabs ===== */}
        <div className="flex gap-2 px-4 py-2 border-b border-gray-200">
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

        {/* ===== Content ===== */}
        <div className="flex-1 overflow-y-auto custom-scroll p-4">
          <AnimatePresence mode="wait">
            {active === "messages" && <SavedMessages query={query} />}
            {active === "files" && <SavedFiles query={query} />}
            {active === "photos" && <SavedPhotos query={query} />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Saved;

/* ================= Tab Button ================= */

const TabButton = ({ children, icon, active, onClick }) => (
  <motion.button
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    className={`relative px-3 py-1.5 text-sm font-semibold rounded-full
      flex items-center gap-1.5 transition
      ${
        active
          ? "text-green-600 bg-green-100"
          : "text-gray-500 hover:bg-gray-100"
      }`}
  >
    {icon}
    {children}

    {active && (
      <motion.span
        layoutId="savedTab"
        className="absolute inset-0 rounded-full border border-green-400"
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
