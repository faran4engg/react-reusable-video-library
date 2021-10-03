import { FC, memo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { OwnProps, RenderProps, Tabs } from './types';
import { useApprovedVideos, useMeta } from 'app/hooks/queries-hooks';

const SearchVideosContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const { pathname } = useLocation();

  const search = pathname.split('/')[2] as Tabs;
  const [selectedTab, setSelectedTab] = useState<Tabs>(search || 'categories');

  const { data: approvedVideos, isLoading } = useApprovedVideos();
  const { data: meta } = useMeta();

  const tabs: Tabs[] = ['categories', 'tags', 'speakerNames']; // need to check for playlist

  useEffect(() => {
    if (search) {
      setSelectedTab(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        approvedVideos: approvedVideos?.data,
        selectedTab: selectedTab,
        handleSelectedTab: setSelectedTab,
        videosMeta: meta?.data,
        videos: meta?.data[selectedTab],
        tabs,
        search,
        isLoading,
        searchFor: pathname.split('/')[3],
      })}
    </div>
  );
};

export default memo(SearchVideosContainer);
