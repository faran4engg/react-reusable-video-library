import { FC } from 'react';
import ReactPlayer from 'react-player/lazy';
import { VideoPlayerProps } from './types';
import '../styles.css';

const VideoPlayer: FC<VideoPlayerProps> = ({
  url,
  watchVideo,
  disbaleVideoClick = false,
  isLightMode = true,
}) => (
  <div className="aspect-ratio-box" onClick={watchVideo}>
    {disbaleVideoClick && (
      <div className="absolute top-0 left-0 z-10 w-full h-full cursor-pointer"></div>
    )}
    <ReactPlayer
      className="react-player"
      playIcon={<span>&nbsp;</span>}
      light={isLightMode}
      controls
      width="100%"
      height="100%"
      url={url}
      config={{
        youtube: {
          playerVars: { modestbranding: 1, rel: 0 },
        },
        dailymotion: {
          params: {
            'sharing-enable': false,
            'ui-logo': false,
            'ui-start-screen-info': false,
            'queue-enable': false,
          },
        },
      }}
    />
  </div>
);

export default VideoPlayer;
