import { VideoGrid } from 'app/domains/Videos/components';
import { getVideos } from 'utils/getVideos';
import { SearchVideoGridProps } from './types';

const SearchVideoGrid: React.FC<SearchVideoGridProps> = ({
  approvedVideos,
  videosMetaData,
  isLoading,
  searchFor,
}) => {
  return (
    <>
      <VideoGrid
        isLoading={isLoading}
        videos={getVideos(videosMetaData[searchFor], approvedVideos)}
      />
    </>
  );
};

export default SearchVideoGrid;
