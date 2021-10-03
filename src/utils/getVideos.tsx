export const getVideos = (idArr = [], vdoObj) => {
  if (!idArr || !vdoObj) {
    return [];
  }

  return idArr.map(id => ({
    ...vdoObj[id],
    id,
  }));
};
