/* eslint-disable no-useless-escape */
export const getYouTubeVideoId = videoUrl =>
  videoUrl.split(
    /^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/,
  )[3];
