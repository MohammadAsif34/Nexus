import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeTopTabs } from "../../redux/slice/tabSlice";
import { AnimatePresence, motion } from "framer-motion";
import { User, UserCircle, X } from "lucide-react";
import axios from "axios";
import { fetchNewUserResults, sendRequestAPI } from "../../api/APIs";
import { isValidSearch } from "../../utils/isValidSeach";

const AddNewUser = () => {
  const dispatch = useDispatch();
  const { topTabs } = useSelector((s) => s.tabs);
  const { user } = useSelector((s) => s.user);

  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    dispatch(closeTopTabs());
  };

  /* 🔥 Realtime search with debounce */
  useEffect(() => {
    if (!query.trim()) {
      setUsers([]);
      return;
    }

    const delay = setTimeout(() => {
      if (isValidSearch(query)) {
        searchUsers(query);
        setError("");
      } else setError("special character not allowed");
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  const searchUsers = async (query) => {
    try {
      setLoading(true);
      const res = await fetchNewUserResults(query);
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* 🔥 Send friend request */
  const sendRequest = async (userId) => {
    try {
      const res = await sendRequestAPI({
        to: userId,
        from: user._id,
      });
      console.log(res);
      if (res.success) alert(res.message);
    } catch (err) {
      alert("Failed to send request ❌");
    }
  };

  return (
    <AnimatePresence>
      {topTabs === "add_new_users" && (
        <motion.div
          key="add-new-users"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
        >
          <div className="min-w-sm w-xl bg-white/50 backdrop-blur-[2px] rounded-xl shadow-lg relative">
            {/* ❌ Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={handleClose}
            >
              <X />
            </button>

            {/* 🔍 Header */}
            <div className="p-5  border-">
              <h2 className="text-lg font-semibold">Add New Friend</h2>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Search by email"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={` w-full px-3 py-2 border border-gray-500 rounded-md outline-none focus:ring-2 ring-blue-500/50
                    ${error && "ring-red-500/30 border-red-500/50"}
                    `}
                />
                <button
                  type="submit"
                  className="bg-blue-500 px-4 rounded-md text-white hover:bg-blue-600 transition-all duration-150"
                >
                  Search
                </button>
              </div>
              <p className="h-5 mt-1 text-xs text-red-500">
                {error ? error : ""}
              </p>
            </div>

            {/* 📋 Results */}
            <div className="h-40 overflow-y-auto px-4">
              {loading && (
                <p className="text-sm text-gray-500 text-center">
                  <UserCircle className="inline-block" size={40} />
                  <br />
                  Searching...
                </p>
              )}

              {users.length === 0 && !loading && (
                <p className="text-sm text-gray-500 text-center">
                  <UserCircle className="inline-block" size={40} />
                  <br />
                  No users found
                </p>
              )}

              {users?.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center justify-between px-4 py-2 bg-blue-500/30 rounded-xl mb-2 hover:bg-blue-500/50 cursor-pointer transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full overflow-hidden">
                    <img src={user.picture} loading="lazy" alt="picture" />
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>

                  <button
                    onClick={() => sendRequest(user._id)}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddNewUser;
