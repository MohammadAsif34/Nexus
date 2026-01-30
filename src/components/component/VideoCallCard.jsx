import React, { useEffect, useRef } from "react";
import {
  PhoneOff,
  Mic,
  MicOff,
  Video,
  VideoOff,
  VolumeOff,
  Volume2,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  endCall,
  toggleMute,
  toggleSpeaker,
  toggleCamera,
} from "../../redux/slice/callSlice";

import {
  getVideoCallStream,
  attachStreamToVideo,
  toggleMic as toggleMicTrack,
  toggleCamera as toggleCameraTrack,
  stopVideoCallStream,
} from "../../utils/videoCall";

const VideoCallCard = () => {
  const { open, type, peer, muted, cameraOff, status, user } = useSelector(
    (s) => s.call,
  );

  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  /* ===== Start camera when call CONNECTS ===== */
  useEffect(() => {
    if (open && type === "video" && status === "connected") {
      startVideo();
    }

    return () => {
      stopVideo();
    };
  }, [open, type, status]);

  /* ===== Get camera stream ===== */
  const startVideo = async () => {
    try {
      const stream = await getVideoCallStream();
      streamRef.current = stream;
      attachStreamToVideo(videoRef.current, stream);
    } catch {
      alert("Camera & microphone permission required");
      dispatch(endCall());
    }
  };

  /* ===== Stop camera ===== */
  const stopVideo = () => {
    stopVideoCallStream(streamRef.current);
    streamRef.current = null;
  };

  /* ===== Controls ===== */
  const handleToggleMic = () => {
    toggleMicTrack(streamRef.current);
    dispatch(toggleMute());
  };

  const handleToggleCamera = () => {
    toggleCameraTrack(streamRef.current);
    dispatch(toggleCamera());
  };

  const handleEndCall = () => {
    stopVideo();
    dispatch(endCall());
  };

  if (!open || type !== "video") return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* ===== Video Area ===== */}
      <div className="flex-1 relative">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {status !== "connected" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/70">
            <img
              src={peer?.photo || "/default_avatar.png"}
              alt={user?.name}
              className="w-28 h-28 rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">{peer?.name}</h2>
            <p className="text-sm opacity-70">
              {status === "incoming" ? "Incoming video call" : "Calling…"}
            </p>
          </div>
        )}
      </div>

      {/* ===== Controls ===== */}
      <div className="h-20 flex justify-center gap-6 items-center bg-black/70">
        <button
          onClick={handleToggleMic}
          className="p-4 rounded-full bg-gray-700 text-white"
        >
          {muted ? <MicOff size={22} /> : <Mic size={22} />}
        </button>

        <button
          onClick={() => dispatch(toggleSpeaker())}
          className="p-4 rounded-full bg-gray-700 text-white"
        >
          <Volume2 size={22} />
        </button>

        <button
          onClick={handleToggleCamera}
          className="p-4 rounded-full bg-gray-700 text-white"
        >
          {cameraOff ? <VideoOff size={22} /> : <Video size={22} />}
        </button>

        <button
          onClick={handleEndCall}
          className="p-4 rounded-full bg-red-500 text-white"
        >
          <PhoneOff size={20} />
        </button>
      </div>
    </div>
  );
};

export default VideoCallCard;
