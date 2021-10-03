import { useMutation } from 'react-query';
import { UploadVideoFormValuesToDB } from 'app/domains/Common/kernel/types';
import { uploadForReview } from 'app/queries';

export const usePostUserUpload = () =>
  useMutation((newVideo: UploadVideoFormValuesToDB) =>
    uploadForReview(newVideo),
  );
