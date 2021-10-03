/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import { CardSkeleton } from 'app/domains/Common/components/loader';
import VideoThumbnail from '../video-thumbnail/VideoThumbnail';
import VideoDetails from '../video-details/VideoDetails';
import { VideoGridProps } from './types';
import { Input } from 'app/domains/Common/components/Forms';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';
import { getFilteredVideos } from 'utils/getFilteredVideos';
import { useDebounce } from 'app/hooks/app-hooks/useDebounce';

const VideoGrid: FC<VideoGridProps> = ({ isLoading, videos = [] }) => {
  const count = 12;
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [scrolled, setScrolled] = useState([]);
  const [start, setStart] = useState(0);

  const [filteredVideos, setFilteredVideos] = useState<any>([]);
  const [hasNextPage, setHasNextPage] = useState(false);

  const debouncedFilter = useDebounce(searchTerm => {
    if (!searchTerm && videos) {
      setFilteredVideos(scrolled);
      setHasNextPage(videos.length > scrolled.length);
      setIsTyping(false);
      return;
    }
    const filtered = getFilteredVideos(videos, searchTerm.toLowerCase().trim());
    setFilteredVideos(filtered);
    setHasNextPage(false);
    setIsTyping(false);
  }, 800);

  const history = useHistory();
  const watchVideo = id => {
    history.push(`/watch/${id}`);
  };

  const handleLoadMore = () => {
    setLoading(true);
    // await sleep(1200);
    if (videos) {
      let scrolledVideos = [];
      const next = start + count;
      setFilteredVideos(prev => {
        // @ts-ignore
        scrolledVideos = [...prev, ...videos?.slice(start, next)];
        return scrolledVideos;
      });

      setStart(next);
      setLoading(false);

      setHasNextPage(videos.length > scrolledVideos.length);
      setScrolled(scrolledVideos);
    }
  };

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: handleLoadMore,
    scrollContainer: 'window',
  });

  useEffect(() => {
    if (pathname) {
      setFilteredVideos(videos?.slice(0, 3));
      setStart(3);
      setHasNextPage(videos?.length > 3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const Videos = filteredVideos?.map(video => (
    <div
      key={video.id}
      className="overflow-hidden bg-transparent rounded-lg shadow-lg cursor-pointer"
    >
      <VideoThumbnail url={video.url} watchVideo={() => watchVideo(video.id)} />
      <VideoDetails
        details={video}
        watchVideo={() => watchVideo(video.id)}
        showMoreDetails={false}
        showWatchBtn
        videoViewUrl={`/watch/${video.id}`}
      />
    </div>
  ));

  return (
    <>
      {!isLoading && (
        <div className="w-full mx-auto mb-4 md:w-2/4">
          <Input
            autocomplete="off"
            name="searchVideo"
            type="text"
            onChange={e => {
              const val = e.target.value;
              debouncedFilter(val);
              setIsTyping(true);
            }}
            placeholder="search by keywords"
            withIcon
            icon={
              isTyping ? (
                <span className="w-5 h-5 mx-auto animate-spin">⌛</span>
              ) : (
                <span className="w-5 h-5 mx-auto ">🔍</span>
              )
            }
            className="mt-1"
          />
        </div>
      )}
      {!isLoading && filteredVideos.length < 1 && (
        <div className="flex items-center justify-center max-w-sm mx-auto mt-8">
          <SvgIcon icon="Error404Icon" />
        </div>
      )}

      {isLoading ? (
        <div className="grid gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3">
          <CardSkeleton noOfCards={3} />
        </div>
      ) : (
        <>
          {/* @ts-ignore */}
          <div ref={infiniteRef}>
            <div className="grid gap-6 mb-4 sm:grid-cols-2 md:grid-cols-3">
              {Videos}
            </div>
            {loading && (
              <div className="w-5 h-5 mx-auto mb-8 animate-spin">⚽</div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default memo(VideoGrid);
