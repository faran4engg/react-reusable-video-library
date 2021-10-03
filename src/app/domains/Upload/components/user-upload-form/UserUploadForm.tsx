import { FC, useState, useEffect } from 'react';

import { VideoForm } from 'app/domains/Common/components/video-form';
import { UserUploadFormProps } from './types';
import { getFormDataBeforeSubmit } from 'utils/formUtils';
import { Modal } from 'app/domains/Common/components/modal';
import { VideoFormSubmitLoader } from 'app/domains/Common/components/loader';
import { sleep } from 'utils/sleep';

const UserUploadForm: FC<UserUploadFormProps> = ({
  onSubmit,
  isUploadSuccess,
  allCategories,
  allTags,
  allSpeakerNames,
}) => {
  const [showModalOnSuccess, setShowModalOnSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const uploadFormSubmit = async formValues => {
    setShowLoader(true);
    const videoToUploadForReview = getFormDataBeforeSubmit(formValues);
    await sleep(600);
    await onSubmit(videoToUploadForReview);
  };
  useEffect(() => {
    if (isUploadSuccess) {
      setShowModalOnSuccess(true);
      setShowLoader(false);
    }
  }, [isUploadSuccess]);

  return (
    <>
      {showLoader && <VideoFormSubmitLoader />}
      {showModalOnSuccess && (
        <Modal showModal={setShowModalOnSuccess}>
          <p className="text-1xl">
            Jazakallah for uploading a video ! It will be reviewed by our team
            and published within 4️8 hrs InshaAllah 💖
          </p>
        </Modal>
      )}
      <VideoForm
        allCategories={allCategories}
        allTags={allTags}
        allSpeakerNames={allSpeakerNames}
        onSubmit={uploadFormSubmit}
      />
    </>
  );
};

export default UserUploadForm;
