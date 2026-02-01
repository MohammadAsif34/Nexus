import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const modes = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "System" },
];

const Darkmode = () => {
  const [selected, setSelected] = useState("light");

  return (
    <section className="h-full flex flex-col bg-white/50 backdrop-blur-2xl">
      {/* ===== Header ===== */}
      <div className="px-4 py-3 text-xl font-semibold text-gray-800 border-b border-gray-200">
        Dark Mode
      </div>

      {/* ===== Options ===== */}
      <div className="flex-1 px-6 py-6 flex gap-4 flex-wrap">
        {modes.map((mode) => (
          <ModeCard
            key={mode.id}
            active={selected === mode.id}
            onClick={() => setSelected(mode.id)}
          >
            {mode.label}
          </ModeCard>
        ))}
      </div>
    </section>
  );
};

export default Darkmode;

/* ================= Mode Card ================= */

const ModeCard = ({ children, active, onClick }) => {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative min-w-[160px] max-w-[240px] h-24
                  rounded-xl border flex items-center justify-center
                  font-semibold cursor-pointer transition
                  ${
                    active
                      ? "border-green-500 bg-green-50 text-green-600"
                      : "border-gray-300 text-gray-500 hover:bg-gray-50"
                  }`}
    >
      {children}

      {/* Selected Indicator */}
      {active && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute top-2 right-2 w-6 h-6 rounded-full
                     bg-green-500 text-white flex items-center justify-center"
        >
          <Check size={14} />
        </motion.span>
      )}
    </motion.div>
  );
};
