import { BadgePills } from 'app/domains/Common/components/badge-pills';
import { FC } from 'react';
import VideoViewMeta from '../video-view-meta/VideoViewMeta';
import { VideoDetailsProps } from './types';
import { useHistory } from 'react-router-dom';

const VideoDetails: FC<VideoDetailsProps> = ({
  details: { title, description, category, speakerName, tags },
  watchVideo,
  showMoreDetails,
  videoViewUrl,
  showWatchBtn = true,
}) => {
  const history = useHistory();

  return (
    <div className="flex flex-col items-center justify-center capitalize cursor-default ">
      <div className="w-full overflow-hidden shadow-lg bg-light-mode dark:bg-dark-mode">
        <h3 className="px-3 py-1 font-semibold tracking-wide text-center truncate">
          {title}
        </h3>
        {showMoreDetails && (
          <>
            <p className="px-3 py-1 my-1 text-xs tracking-wide text-left line-clamp-2 hover:line-clamp-none">
              📝 {description}
            </p>
            <div className="flex items-center justify-between px-3 py-1 pb-2 ">
              <span
                className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded cursor-pointer dark:bg-gray-900"
                onClick={() => history.push(`/search/categories/${category}`)}
              >
                📌 &nbsp; {category}
              </span>

              <span
                className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded cursor-pointer dark:bg-gray-900"
                onClick={() =>
                  history.push(`/search/speakerNames/${speakerName}`)
                }
              >
                🔊 &nbsp; {speakerName}
              </span>
            </div>
            <div className="px-3 py-1 text-center">
              {tags.map(tag => (
                <BadgePills
                  key={tag}
                  name={tag}
                  onClick={() => history.push(`/search/tags/${tag}`)}
                />
              ))}
            </div>
          </>
        )}
        <VideoViewMeta
          watchVideo={watchVideo}
          showWatchBtn={showWatchBtn}
          videoViewUrl={videoViewUrl}
          title={title}
        />
      </div>
    </div>
  );
};

export default VideoDetails;
