import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import VideoPlayer from './../video-player/VideoPlayer';
import VideoDetails from '../video-details/VideoDetails';
import { VideoCardProps } from './types';

const VideoCard: FC<VideoCardProps> = ({
  video,
  id,
  showMoreDetails = true,
  disbaleVideoClick,
  isLightMode = true,
  showWatchBtn,
}) => {
  const history = useHistory();
  const videoViewUrl = `/watch/${id}`;

  const watchVideo = () => {
    history.push(videoViewUrl);
  };
  return (
    <div className="overflow-hidden bg-transparent rounded-lg shadow-lg cursor-pointer">
      <VideoPlayer
        url={video.url}
        disbaleVideoClick={disbaleVideoClick}
        isLightMode={isLightMode}
        watchVideo={watchVideo}
      />
      <VideoDetails
        details={video}
        watchVideo={watchVideo}
        showMoreDetails={showMoreDetails}
        showWatchBtn={showWatchBtn}
        videoViewUrl={videoViewUrl}
      />
    </div>
  );
};

export default VideoCard;
