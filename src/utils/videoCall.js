/* ===============================
   VIDEO CALL MEDIA UTILITIES
   =============================== */

/* Get camera + mic stream */
export const getVideoCallStream = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    return stream;
  } catch (err) {
    console.error("Video call permission denied", err);
    throw err;
  }
};

/* Attach stream to video element */
export const attachStreamToVideo = (videoEl, stream) => {
  if (!videoEl) return;
  videoEl.srcObject = stream;
};

/* Toggle microphone */
export const toggleMic = (stream) => {
  if (!stream) return;
  const track = stream.getAudioTracks()[0];
  if (track) {
    track.enabled = !track.enabled;
  }
};

/* Toggle camera */
export const toggleCamera = (stream) => {
  if (!stream) return;
  const track = stream.getVideoTracks()[0];
  if (track) {
    track.enabled = !track.enabled;
  }
};

/* Stop all tracks (end call / cleanup) */
export const stopVideoCallStream = (stream) => {
  if (!stream) return;
  stream.getTracks().forEach((track) => track.stop());
};

/* Check camera permission state */
export const checkCameraPermission = async () => {
  try {
    const res = await navigator.permissions.query({
      name: "camera",
    });
    return res.state; // granted | denied | prompt
  } catch {
    return "unknown";
  }
};

/* Check microphone permission state */
export const checkMicPermission = async () => {
  try {
    const res = await navigator.permissions.query({
      name: "microphone",
    });
    return res.state;
  } catch {
    return "unknown";
  }
};
