import { shuffle } from './shuffleArr';

export const getTrendingVideos = (idArr = [], vdoObj) => {
  if (!idArr || !vdoObj) {
    return [];
  }

  return shuffle(idArr).map(id => ({
    ...vdoObj[id],
    id,
  }));
};
