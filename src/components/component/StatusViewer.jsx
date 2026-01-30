import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  closeStatusViewer,
  nextStatus,
  prevStatus,
} from "../../redux/slice/viewStatus";
// import {
//   closeStatusViewer,
//   nextStatus,
//   prevStatus,
// } from "../../redux/slice/statusViewerSlice";

const AUTO_DURATION = 5000; // 5 seconds

const StatusViewer = () => {
  const dispatch = useDispatch();
  const { open, statuses, index } = useSelector((s) => s.viewStatus);
  console.log(open);

  const current = statuses[index];

  /* ===== Auto Progress ===== */
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      dispatch(nextStatus());
    }, AUTO_DURATION);

    return () => clearTimeout(timer);
  }, [index, open]);

  /* ===== ESC to close ===== */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        dispatch(closeStatusViewer());
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          {/* ===== Progress Bar ===== */}
          <div className="absolute top-3 left-3 right-3 flex gap-1">
            {statuses.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1 bg-white/30 rounded overflow-hidden"
              >
                {i === index && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTO_DURATION / 1000 }}
                    className="h-full bg-white"
                  />
                )}
                {i < index && <div className="h-full bg-white" />}
              </div>
            ))}
          </div>

          {/* =================== status ========================= */}
          <div className="w-1/2 h-full pt-6 flex justify-center">
            <img
              src={statuses[index].avatar}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* ===== Close ===== */}
          <button
            onClick={() => dispatch(closeStatusViewer())}
            className="z-40 p-4 rounded-full absolute top-5 right-4 text-white hover:bg-gray-700"
          >
            <X size={26} />
          </button>

          {/* ===== Click Zones ===== */}
          <div
            className="absolute left-0 top-0 w-1/2 h-full"
            onClick={() => dispatch(prevStatus())}
          />
          <div
            className="absolute right-0 top-0 w-1/2 h-full"
            onClick={() => dispatch(nextStatus())}
          />

          {/* ===== Content ===== */}
          <motion.img
            key={current.src}
            src={current.src}
            alt=""
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-full max-w-full object-contain"
          />

          {/* ===== Caption ===== */}
          {current.caption && (
            <div className="absolute bottom-6 px-6 text-center text-white text-sm">
              {current.caption}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatusViewer;
