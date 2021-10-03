//@ts-nocheck
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import SearchVideosContainer from 'app/domains/Search/containers/SearchVideos';
import { SearchBy, SearchResult } from 'app/domains/Search/components';

const SearchPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Search | Islaamify360</title>
        <meta name="description" content="Search Videos" />
      </Helmet>
      <SearchVideosContainer>
        {({ selectedTab, tabs, handleSelectedTab, videos }) => {
          return (
            <>
              <SearchBy
                tabs={tabs}
                setSearchBy={handleSelectedTab}
                selectedTab={selectedTab}
              />
              <SearchResult videosMeta={videos} selectedTab={selectedTab} />
            </>
          );
        }}
      </SearchVideosContainer>
    </>
  );
};

export default SearchPage;
