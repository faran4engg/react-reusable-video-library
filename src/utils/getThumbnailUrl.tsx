import { getHostName } from './getHostName';
import { getYouTubeVideoId } from './getYouTubeVideoId';
import { getDailyMotionVideoId } from './getDailyMotionVideoId';
import {
  YTThumbBaseURL,
  DMThumbBaseURL,
  fallbackImgUrl,
  VideoProvider,
} from './constants';

const getYTThumbs = url =>
  `${YTThumbBaseURL}/vi/${getYouTubeVideoId(url)}/hqdefault.jpg`;

const getDMThumbs = url =>
  `${DMThumbBaseURL}/video/${getDailyMotionVideoId(url)}`;

const isYT = provider =>
  provider.includes(VideoProvider.YT_LONG) ||
  provider.includes(VideoProvider.YT_SHORT);

const isDM = provider => provider.includes(VideoProvider.DM_LONG);

export const getThumbnailUrl = url => {
  const provider = getHostName(url).toLowerCase();
  let src = fallbackImgUrl;

  if (isYT(provider)) {
    src = getYTThumbs(url);
  } else if (isDM(provider)) {
    src = getDMThumbs(url);
  }
  return src;
};
