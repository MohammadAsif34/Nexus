import React from "react";
import {
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Speaker,
  VolumeOff,
  Volume2,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  endCall,
  toggleMute,
  toggleSpeaker,
} from "../../redux/slice/callSlice";

const AudioCallCard = () => {
  const { open, type, user, muted, speakerOff } = useSelector((s) => s.call);
  const a = useSelector((s) => s.call);
  const dispatch = useDispatch();
  console.log(a);
  if (!open || !type == "audio") return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="w-sm bg-white rounded-2xl px-6 py-10 text-center shadow-xl">
        {/* Avatar */}
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ">
          <img
            src={user?.pnhoto || "/default_avatar.png"}
            alt={user?.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>

        {/* Status */}
        <p className="text-sm text-gray-500 mt-1">
          {status === "incoming"
            ? "Incoming audio call"
            : status === "connected"
              ? "Audio call in progress"
              : "Calling…"}
        </p>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-6">
          {status === "incoming" && (
            <button
              // onClick={onAccept}
              className="w-14 h-14 rounded-full bg-green-500
                         flex items-center justify-center text-white"
            >
              <Phone size={22} />
            </button>
          )}
        </div>

        {/* Controls */}
        {status != "connected" && (
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => dispatch(toggleMute())}
              className="p-4 rounded-full bg-gray-200 "
            >
              {muted ? <MicOff size={22} /> : <Mic size={22} />}
            </button>
            <button
              onClick={() => dispatch(toggleSpeaker())}
              className="p-4 rounded-full bg-gray-200"
            >
              {speakerOff ? <VolumeOff size={22} /> : <Volume2 size={22} />}
            </button>
            <button
              onClick={() => dispatch(endCall())}
              className="p-4 rounded-full bg-red-500 text-white hover:bg-green-500"
            >
              <PhoneOff size={22} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioCallCard;
