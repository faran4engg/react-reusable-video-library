import VideoPlayerLoading from './VideoPlayerLoading';
import VideoTitleDescLoading from './VideoTitleDescLoading';

const VideoWatchSkeleton = () => {
  return (
    <div className="mx-auto w-full h-full rounded-md shadow-md animate-pulse dark:bg-dark-mode bg-light-mode">
      <VideoPlayerLoading />
      <VideoTitleDescLoading />
    </div>
  );
};

export default VideoWatchSkeleton;
