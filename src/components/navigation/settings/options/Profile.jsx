import React, { useState } from "react";
import { Edit, Save, X } from "lucide-react";
import { motion, parseCSSVariable } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import { default_user } from "../../../../assets/defaultUser";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  let { user } = useAuth0();
  if (!user) user = default_user;
  else
    user = {
      name: user.name,
      nickname: user.nickname,
      bio: "I'm Happy 😊",
      picture: user.picture,
      email: user.email, // req.
      email_verified: user.email_verified,
      sub: user.sub, //req. *
      phone: user.phone_number,
      password: null, // req. *
      updatedAt: user.updated_at,
      createdAt: user.updated_at,
    };

  return (
    <section className="h-full flex flex-col bg-white">
      {/* ===== Header ===== */}
      <div className="px-4 py-3 text-xl font-semibold text-gray-800 border-b border-gray-200">
        Profile
      </div>

      {/* ===== Content ===== */}
      <div className="flex-1 px-6 py-6 overflow-y-auto relative custom-scroll">
        {/* Floating Action Button */}
        {!isEdit && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsEdit(true)}
            className="fixed bottom-6 right-6 p-4 rounded-full
                       bg-green-500 text-white shadow-lg hover:bg-green-600"
          >
            <Edit size={22} />
          </motion.button>
        )}

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="max-w-md flex flex-col gap-4"
        >
          <Input label="Name" name="name" disabled={!isEdit} user={user} />
          <Input
            label="Nick Name"
            name="nickname"
            disabled={!isEdit}
            user={user}
          />
          <Input label="Email" name="email" disabled={!isEdit} user={user} />
          <Input label="Phone" name="phone" disabled={!isEdit} user={user} />
          <Textarea label="Bio" name="bio" disabled={!isEdit} user={user} />

          {/* ===== Action Buttons ===== */}
          {isEdit && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2 pt-2"
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2
                           bg-green-500 text-white rounded-md
                           hover:bg-green-600 transition"
              >
                <Save size={16} />
                Save
              </button>

              <button
                type="button"
                onClick={() => setIsEdit(false)}
                className="flex items-center gap-1 px-4 py-2
                           border border-gray-300 rounded-md
                           hover:bg-gray-100 transition"
              >
                <X size={16} />
                Cancel
              </button>
            </motion.div>
          )}
          {JSON.stringify(user)}
        </motion.form>
      </div>
    </section>
  );
};

export default Profile;

/* ================= Reusable Inputs ================= */

const Input = ({ label, name, disabled, user }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-600">{label}</label>
    <input
      name={name}
      value={user[name] ? user[name] : ""}
      disabled={disabled}
      className={`h-9 px-3 rounded-md text-sm outline-none transition
        ${
          disabled
            ? "border border-gray-200 bg-gray-50 text-gray-500"
            : "border-2 border-gray-400 focus:ring-2 ring-green-300"
        }`}
    />
  </div>
);

const Textarea = ({ label, disabled, name, user }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-600">{label}</label>
    <textarea
      rows={3}
      name={name}
      value={user[name]}
      disabled={disabled}
      className={`px-3 py-2 rounded-md text-sm outline-none transition resize-none
        ${
          disabled
            ? "border border-gray-200 bg-gray-50 text-gray-500"
            : "border-2 border-gray-400 focus:ring-2 ring-green-300"
        }`}
    />
  </div>
);
