import { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { MatchParams, OwnProps, RenderProps } from './types';

import { useApprovedVideos } from 'app/hooks/queries-hooks';

const WatchVideosContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const match = useRouteMatch<MatchParams>();
  const { id } = match.params;

  const { data: approvedVideos } = useApprovedVideos();

  return children({
    id,
    currentlyWatching: approvedVideos?.data[id],
    approvedVideos,
  });
};

export default WatchVideosContainer;
