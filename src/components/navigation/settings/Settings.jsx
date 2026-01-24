import React from "react";
import {
  BadgeQuestionMark,
  Bell,
  Edit,
  Lock,
  LogOut,
  ShieldCheck,
  User,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { setTabs2 } from "../../../redux/slice/tabSlice";

const Settings = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-full flex flex-col cursor-default ">
      <div className="p-2 font-semibold text-2xl text-gray-800">Settings</div>
      <div className="flex-1">
        <div className="p-4 my-2 relative flex gap-4 items-center bg-white/50 backdrop-blur-xl rounded-md hover:bg-white/70 transition-all duration-300">
          <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden ">
            <img src="/default_avatar.png" alt="" />
          </div>
          <p className="font-semibold">Mohammad Asif</p>
          <button
            className="absolute right-2 p-2 hover:bg-green-300 rounded-full"
            onClick={() => dispatch(setTabs2("profile"))}
          >
            <Edit size={18} />
          </button>
        </div>
        <hr className="text-gray-300" />
        <div className="py-2 flex flex-col gap-0.5 ">
          <Card label="profile">
            <User size={18} />
            Profile
          </Card>
          <Card label="notification">
            <Bell size={18} />
            Notification
          </Card>
          <Card label="darkmode">
            <Bell size={18} />
            Dark Mode
          </Card>
          <Card label="privacy">
            <Lock size={18} />
            Privacy
          </Card>
          <Card label="security">
            <ShieldCheck size={18} />
            Security
          </Card>
          <Card label="help">
            <BadgeQuestionMark size={18} />
            Help
          </Card>
        </div>
        <hr className="text-gray-300" />
        <button className="w-full flex items-center gap-2 my-2 text-start text-sm text-red-500 px-4 py-2 rounded-md hover:bg-red-200 transition-all duration-300">
          <LogOut size={18} />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Settings;

const Card = ({ children, label = "profile" }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="px-4 py-2.5 flex items-center gap-2 hover:bg-gray-200 rounded-md text-sm font-semibold transition-all duration-300 "
        onClick={() => dispatch(setTabs2(label))}
      >
        {children}
      </div>
    </>
  );
};
