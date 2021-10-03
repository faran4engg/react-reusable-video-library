import { FC, memo } from 'react';
import { OwnProps, RenderProps } from './types';
import {
  useApprovedVideos,
  useTrendingVideoIds,
} from 'app/hooks/queries-hooks';
import { getTrendingVideos } from 'utils/getTrendingVideos';

const TrendingVideosContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const { isLoading, data: approvedVideos, isSuccess } = useApprovedVideos();
  const { data: videoIdArr } = useTrendingVideoIds({ shouldFetch: isSuccess });

  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        isLoading,
        // @ts-ignore
        videos: getTrendingVideos(videoIdArr?.data, approvedVideos?.data),
      })}
    </div>
  );
};

export default memo(TrendingVideosContainer);
