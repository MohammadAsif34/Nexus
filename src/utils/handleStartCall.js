export const handleStartCall = async () => {
  try {
    const stream = await getAudioStream();

    // store stream somewhere (ref / context)
    audioStreamRef.current = stream;

    dispatch(startCall({ type: "audio", peer }));
  } catch {
    alert("Microphone permission required");
  }
};
