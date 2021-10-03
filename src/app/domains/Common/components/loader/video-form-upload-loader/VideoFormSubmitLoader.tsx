import React from 'react';
import { SuspenseLoader } from 'app/domains/Common/components/loader';

const VideoFormSubmitLoader = () => (
  <>
    <div className="absolute top-0">
      <SuspenseLoader />
    </div>
    <div className="block fixed inset-0 z-20 bg-black opacity-70 transition-opacity" />
  </>
);

export default VideoFormSubmitLoader;
