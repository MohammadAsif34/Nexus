import React, { useEffect, useRef } from "react";

const Camera = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  /* ===== Start Camera ===== */
  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      streamRef.current = stream;
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Camera access denied", err);
      alert("Camera permission required");
    }
  };

  /* ===== Stop Camera ===== */
  const stopVideo = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  /* ===== Auto cleanup ===== */
  useEffect(() => {
    return () => stopVideo();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black gap-4">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-full object-contain"
      />

      <div className="absolute bottom-6 flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={startVideo}
        >
          Start
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={stopVideo}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Camera;
