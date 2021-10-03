import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import UploadVideoFormContainer from 'app/domains/Upload/containers/UploadVideoForm';
import { UserUploadForm } from 'app/domains/Upload/components';

const UploadPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Upload a Video 🎥</title>
        <meta name="description" content="upload video page" />
      </Helmet>
      <div className="flex justify-center items-center">
        <UploadVideoFormContainer>
          {props => <UserUploadForm {...props} />}
        </UploadVideoFormContainer>
      </div>
    </>
  );
};

export default UploadPage;
