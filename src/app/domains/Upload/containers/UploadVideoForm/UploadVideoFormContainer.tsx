import { FC } from 'react';

import { OwnProps, RenderProps } from './types';
import { UploadVideoFormValuesToDB } from 'app/domains/Common/kernel/types';
import {
  useMetaCategories,
  useMetaSpeakerNames,
  useMetaTags,
  usePostUserUpload,
} from 'app/hooks/queries-hooks';

const UploadVideoFormContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const { mutateAsync, isSuccess } = usePostUserUpload();

  const {
    isSuccess: isMetaCategoriesSuccess,
    data: allCategories,
  } = useMetaCategories();

  const {
    isSuccess: isMetaSpeakerNamesSuccess,
    data: allSpeakerNames,
  } = useMetaSpeakerNames({
    shouldFetch: isMetaCategoriesSuccess,
  });

  const { data: allTags } = useMetaTags({
    shouldFetch: isMetaSpeakerNamesSuccess,
  });

  const onSubmit = (formData: UploadVideoFormValuesToDB) => {
    mutateAsync(formData);
  };

  return (
    <div className="w-full p-4 mx-auto rounded-lg shadow-lg md:w-3/4 lg:w2/4 bg-light-mode dark:bg-dark-mode text-light-mode-text dark:text-dark-mode-text">
      {children({
        onSubmit,
        isUploadSuccess: isSuccess,
        allCategories: allCategories?.data,
        allTags: allTags?.data,
        allSpeakerNames: allSpeakerNames?.data,
      })}
    </div>
  );
};

export default UploadVideoFormContainer;
