import { getThumbnailUrl } from 'utils/getThumbnailUrl';
import { VideoThumbnailProps } from './types';
import '../styles.css';

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ url, watchVideo }) => {
  return (
    <div className="aspect-ratio-box" onClick={watchVideo}>
      <img
        loading="lazy"
        src={getThumbnailUrl(url)}
        alt="URL"
        className="object-cover w-full h-full react-player"
      />
    </div>
  );
};

export default VideoThumbnail;
