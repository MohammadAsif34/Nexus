import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldCheck, LifeBuoy } from "lucide-react";

const Help = () => {
  return (
    <section className="h-full flex flex-col bg-white">
      {/* ===== Header ===== */}
      <div className="px-4 py-3 text-xl font-semibold text-gray-800 border-b border-gray-200">
        Help
      </div>

      {/* ===== Content ===== */}
      <div className="flex-1 px-6 py-4 overflow-y-auto custom-scroll">
        <HelpSection
          title="FAQs"
          icon={HelpCircle}
          items={[
            {
              q: "How do I start a new chat?",
              a: "Open Messages and click the plus icon to start a new conversation.",
            },
            {
              q: "Can I delete messages?",
              a: "Yes, long press on a message and choose delete.",
            },
          ]}
        />

        <HelpSection
          title="Support"
          icon={LifeBuoy}
          items={[
            {
              q: "How can I contact support?",
              a: "You can reach out to us via email or in-app support chat.",
            },
            {
              q: "Report a bug",
              a: "Go to Settings → Help → Report a problem.",
            },
          ]}
        />

        <HelpSection
          title="Terms & Privacy Policy"
          icon={ShieldCheck}
          items={[
            {
              q: "How is my data used?",
              a: "We only use your data to improve your experience and never sell it.",
            },
            {
              q: "Is my chat secure?",
              a: "Yes, all chats are end-to-end encrypted.",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Help;

/* ================= Help Section ================= */

const HelpSection = ({ title, icon: Icon, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mb-6"
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon size={20} className="text-green-500" />
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      </div>

      <div className="flex flex-col gap-2">
        {items.map((item, idx) => (
          <AccordionItem key={idx} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

/* ================= Accordion Item ================= */

const AccordionItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between
                   px-4 py-2 text-sm font-semibold text-gray-700
                   hover:bg-gray-100 transition"
      >
        {q}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-4 pb-3 text-sm text-gray-500"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
