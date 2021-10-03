import { FC } from 'react';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';
import { UpNextProps } from './types';
import { useHistory } from 'react-router-dom';

const UpNext: FC<UpNextProps> = ({ approvedVideos, category }) => {
  const history = useHistory();
  const list = Object.keys(approvedVideos)
    .map(key => ({ ...approvedVideos?.[key], id: key }))
    .filter(vid => vid.category === category);

  return (
    <div className="col-span-1">
      <h2 className="flex justify-between my-4 md:my-1">
        ▶️ Up Next
        <span>scroll 👇</span>
      </h2>

      <div className="flex flex-wrap mb-4 overflow-y-auto h-96 md:h-80 lg:h-96">
        <ul className="flex flex-col w-full">
          {list.map(video => (
            <li
              key={video.timestamp}
              className="flex flex-row mb-2 border-gray-400"
            >
              <div className="flex items-center flex-1 p-3 overflow-hidden rounded-md shadow-md cursor-pointer select-none bg-light-mode dark:bg-dark-mode">
                <div className="flex flex-col items-center justify-center mr-2 rounded-md ">
                  <div className="w-8 h-8">
                    <SvgIcon icon="PlayListVideIcon" />
                  </div>
                </div>

                <div
                  className="flex flex-col overflow-hidden font-semibold text-gray-600 dark:text-gray-400"
                  onClick={() => history.push(`/watch/${video.id}`)}
                >
                  <p className="truncate text-md">{video.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpNext;
