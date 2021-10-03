import { FC, memo } from 'react';
import { VideoViewMetaProps } from './types';
import { SocialShare } from 'app/domains/Common/components/social-share';

const VideoViewMeta: FC<VideoViewMetaProps> = ({
  videoViewUrl,
  watchVideo,
  title,
  showWatchBtn = true,
}) => {
  const socialShareUrl = window.location.href;

  return (
    <div className="flex items-center justify-between px-3 py-1 pb-2 ">
      <span className="text-xs">
        <img
          loading="lazy"
          src={`https://visitor-badge.glitch.me/badge?page_id=${videoViewUrl}`}
          alt="views"
          width="90%"
          height="100%"
        />
      </span>
      {!showWatchBtn && (
        <SocialShare
          url={socialShareUrl}
          title={`*🎥 ${title}* \n`}
          facebook
          twitter
          telegram
        />
      )}
      {showWatchBtn && (
        <button
          onClick={watchVideo}
          className="px-2 py-1 text-xs font-semibold rounded bg-light-mode-content-bg dark:bg-dark-mode-content-bg"
        >
          ▶ Watch
        </button>
      )}
    </div>
  );
};

export default memo(VideoViewMeta);
