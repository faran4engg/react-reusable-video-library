import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import WatchVideosContainer from 'app/domains/Videos/containers/WatchVideos';
import { WatchPageProps } from './types';
import { CurrentlyWatching, UpNext } from 'app/domains/Videos/components';

const WatchPage: FC<WatchPageProps> = () => {
  return (
    <>
      <Helmet>
        <title>Watch | Islaamify360</title>
        <meta name="description" content="Watch Page for Videos" />
      </Helmet>
      <WatchVideosContainer>
        {({ id, approvedVideos, currentlyWatching }) => (
          <div className="grid grid-cols-1 mt-2 md:grid-cols-3 md:gap-4 lg:mb-4">
            <CurrentlyWatching currentlyWatching={currentlyWatching} id={id} />
            <UpNext
              approvedVideos={approvedVideos?.data}
              category={currentlyWatching.category}
            />
          </div>
        )}
      </WatchVideosContainer>
    </>
  );
};

export default WatchPage;
