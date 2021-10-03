import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import TrendingVideosContainer from 'app/domains/Videos/containers/TrendingVideos';
import { VideoGrid } from 'app/domains/Videos/components';

const HomePage: FC = () => (
  <>
    <Helmet>
      <title>Home | Islaamify360</title>
      <meta name="description" content="Home Page for Trending Videos" />
    </Helmet>

    <TrendingVideosContainer>
      {({ isLoading, videos }) => (
        <VideoGrid isLoading={isLoading} videos={videos} />
      )}
    </TrendingVideosContainer>
  </>
);

export default HomePage;
