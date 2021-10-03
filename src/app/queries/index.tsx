/* eslint-disable @typescript-eslint/no-explicit-any */
import { firebaseInstance } from 'app/axios/firebase-instance';
import { UploadVideoFormValuesToDB } from 'app/domains/Common/kernel/types';

const getAllApprovedVideos = async () => {
  const response = await firebaseInstance.get('/approvedVideos.json');
  await new Promise(resolve => setTimeout(resolve, 300));
  return response;
};

const getVideoById = async (id: string) =>
  await firebaseInstance.get(`/approvedVideos/${id}.json`);

const getVideosMeta = async () => await firebaseInstance.get('/meta.json');

const getVideosByTagName = async tagName =>
  await firebaseInstance.get(`/meta/tags/${tagName}.json`);

const getAllCategories = async () =>
  await firebaseInstance.get('/meta/categories.json');

const getAllTags = async () => await firebaseInstance.get('/meta/tags.json');

const getAllSpeakerNames = async () =>
  await firebaseInstance.get('/meta/speakerNames.json');

// post queries
const uploadForReview = async (videoForReview: UploadVideoFormValuesToDB) =>
  await firebaseInstance.post('/needToReview.json', videoForReview);

const sendFeedback = async (feedbackData: any) =>
  await firebaseInstance.post('/feedback.json', feedbackData);

const postApprovedVideo = async (approvedVideoObj: UploadVideoFormValuesToDB) =>
  await firebaseInstance.post(
    `/approvedVideos.json?auth=${sessionStorage.getItem('islaamify360AT')}`,
    approvedVideoObj,
  );

const updateMeta = async tags =>
  await firebaseInstance.put(
    `/meta.json?auth=${sessionStorage.getItem('islaamify360AT')}`,
    tags,
  );

export {
  getAllApprovedVideos,
  getVideosMeta,
  getVideosByTagName,
  getVideoById,
  getAllCategories,
  getAllTags,
  getAllSpeakerNames,
  uploadForReview,
  postApprovedVideo,
  updateMeta,
  sendFeedback,
};
