import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: null, // "audio" | "video"
  status: null, // "calling" | "incoming" | "connected"
  peer: null, // { id, name, avatar }
  muted: false,
  speakerOff: false,
  cameraOff: false,
  startedAt: null, // Date.now()
  user: null,
};

const callSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    /* ===== Start Outgoing Call ===== */
    startCall: (state, action) => {
      const { type, peer, user } = action.payload;

      state.open = true;
      state.type = type; // audio | video
      state.user = user;
      state.status = "calling";
      state.peer = peer;
      state.muted = false;
      state.cameraOff = false;
      state.startedAt = null;
    },

    /* ===== Incoming Call ===== */
    incomingCall: (state, action) => {
      const startCall = async () => {
        await navigator.mediaDevices.getUserMedia({ audio: true });
      };
      startCall();
      const { type, peer } = action.payload;

      state.open = true;
      state.type = type;
      state.status = "incoming";
      state.peer = peer;

      state.muted = false;
      state.cameraOff = false;
      state.startedAt = null;
    },

    /* ===== Accept Call ===== */
    acceptCall: (state) => {
      state.status = "connected";
      state.startedAt = Date.now();
    },

    /* ===== End / Reject Call ===== */
    endCall: () => initialState,

    /* ===== Toggle Controls ===== */
    toggleMute: (state) => {
      state.muted = !state.muted;
    },
    toggleSpeaker: (state) => {
      state.speakerOff = !state.speakerOff;
    },

    toggleCamera: (state) => {
      state.cameraOff = !state.cameraOff;
    },
  },
});

export const {
  startCall,
  incomingCall,
  acceptCall,
  endCall,
  toggleMute,
  toggleSpeaker,
  toggleCamera,
} = callSlice.actions;

export default callSlice.reducer;
