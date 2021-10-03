export const getDailyMotionVideoId = videoUrl => {
  var id = videoUrl.match(
    /^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/,
  );
  if (id !== null) {
    if (id[4] !== undefined) {
      return id[4];
    }
    return id[2];
  }
  return null;
};
