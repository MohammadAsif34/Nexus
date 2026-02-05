import React, { useState } from "react";
import { motion } from "framer-motion";
import { CirclePlus, Search } from "lucide-react";
import UserCard from "./UserCard";
import users from "../../../assets/user.json";
import { useDispatch, useSelector } from "react-redux";
import { setToptabs } from "../../../redux/slice/tabSlice";

const Messages = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const tabs = useSelector((s) => s.tab);
  console.log(tabs);

  const filteredUsers = users.filter((u) =>
    u.name?.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="w-full h-full  flex flex-col">
      {/* ===== Header ===== */}
      <div className="p-2 text-2xl font-semibold text-gray-800 ">Messages</div>

      <div className="flex-1 bg- white rounded-xl sha dow">
        {/* ===== Search ===== */}
        <div className="p-3 ">
          <div className="relative py-1 ">
            <Search
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search messages"
              className="w-full h-9 pl-8 pr-2 text-sm border bg-white border-gray-300 rounded-full
            focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
        </div>

        {/* ===== Chat List ===== */}
        <div className="flex-1 overflow-y-auto custom-scroll px-1 pb-2">
          {/* ===== Favorites ===== */}
          <Section title="Favorites">{/* <UserCard /> */}</Section>

          {/* ===== Direct Messages ===== */}
          <div className="mt-3">
            <div className="px-2 py-2 flex items-center gap-2 sticky top-0 z-10">
              <h3 className="flex-1 text-xs uppercase tracking-wider font-semibold text-white border-b border-gray-200 pb-0.5">
                Direct Messages
              </h3>
              {/* ================ add new user button ===================== */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600"
                onClick={() => dispatch(setToptabs("add_new_users"))}
              >
                <CirclePlus size={22} />
              </motion.button>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 },
                },
              }}
              className="flex flex-col gap-1 mt-1"
            >
              {filteredUsers.map((user, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <UserCard user={user} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;

/* ================= Section Wrapper ================= */

const Section = ({ title, children }) => (
  <div className="mb-3">
    <h3 className="mx-2 mb-1 pb-0.5 text-xs uppercase tracking-wider font-semibold text-white border-b border-gray-200">
      {title}
    </h3>
    <div className="px-1">{children}</div>
  </div>
);
