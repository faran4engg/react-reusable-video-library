//@ts-nocheck
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import SearchVideosContainer from 'app/domains/Search/containers/SearchVideos';
import { SearchVideoGrid } from 'app/domains/Search/components';

const SearchByPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Search | Islaamify360</title>
        <meta name="description" content="Search Videos" />
      </Helmet>
      <SearchVideosContainer>
        {({ approvedVideos, videosMeta, search, isLoading, searchFor }) => {
          return (
            <SearchVideoGrid
              approvedVideos={approvedVideos}
              videosMetaData={videosMeta[search]}
              isLoading={isLoading}
              searchFor={searchFor}
            />
          );
        }}
      </SearchVideosContainer>
    </>
  );
};

export default SearchByPage;
