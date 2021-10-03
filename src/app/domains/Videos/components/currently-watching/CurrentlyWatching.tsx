import { FC, useCallback, useEffect, useState } from 'react';
import VideoCard from '../video-card/VideoCard';
import { CurrentlyWatchingProps } from './types';
import { VideoWatchSkeleton } from 'app/domains/Common/components/loader';
import { sleep } from 'utils/sleep';

const CurrentlyWatching: FC<CurrentlyWatchingProps> = ({
  currentlyWatching,
  id,
}) => {
  const [loading, setLoading] = useState(true);
  const wrapper = document.getElementById('scroll-elem');

  const wait = useCallback(async () => {
    await sleep(500);
    setLoading(false);
  }, []);

  useEffect(() => {
    wait();
  }, [wait]);

  useEffect(() => {
    if (currentlyWatching?.url) {
      wrapper?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [wrapper, currentlyWatching]);

  if (loading || !currentlyWatching) {
    return (
      <div className="col-span-2">
        <div className="h-auto overflow-hidden bg-transparent rounded-lg shadow-lg cursor-pointer ">
          <VideoWatchSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-2" id="scroll-elem">
      <div className="overflow-hidden bg-transparent rounded-lg shadow-lg cursor-pointer">
        <VideoCard
          id={id}
          showMoreDetails
          isLightMode={false}
          showWatchBtn={false}
          video={currentlyWatching}
        />
      </div>
    </div>
  );
};

export default CurrentlyWatching;
