import { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchResultProps } from './types';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';
import { Input } from 'app/domains/Common/components/Forms';
import { useDebounce } from 'app/hooks/app-hooks/useDebounce';

const SearchResult: FC<SearchResultProps> = ({ videosMeta, selectedTab }) => {
  const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filteredVideos, setFilteredVideos] = useState<any>(
    Object.keys(videosMeta),
  );

  const getFilteredVideos = (videos, search) =>
    Object.keys(videos).filter(item => item.includes(search));

  const debouncedFilter = useDebounce(searchTerm => {
    const filtered = getFilteredVideos(
      videosMeta,
      searchTerm.toLowerCase().trim(),
    );
    setFilteredVideos(filtered);
  }, 500);

  useEffect(() => {
    if (videosMeta) setFilteredVideos(Object.keys(videosMeta));
  }, [videosMeta]);

  return (
    <>
      <div className="w-full mx-auto mt-4 mb-4 md:w-2/4">
        <Input
          autocomplete="off"
          name="searchVideo"
          type="text"
          onChange={e => {
            const val = e.target.value;
            debouncedFilter(val.toLowerCase().trim());
          }}
          placeholder={`Search by ${
            selectedTab === 'categories'
              ? 'Category'
              : selectedTab === 'tags'
              ? 'Tag'
              : 'Speaker Name'
          }`}
          withIcon
          icon={<span className="w-5 h-5 mx-auto ">🔍</span>}
          className="mt-1"
        />
      </div>
      {filteredVideos?.length < 1 && (
        <div className="flex items-center justify-center max-w-sm mx-auto mt-8">
          <SvgIcon icon="Error404Icon" />
        </div>
      )}
      <div className="py-5">
        <main className="h-full overflow-y-auto">
          <div className="container grid mx-auto ">
            <div className="grid gap-3 mb-8 md:grid-cols-3 xl:grid-cols-4">
              {filteredVideos?.map(key => (
                <div
                  key={key}
                  className="flex items-center p-2 pr-3 rounded-lg shadow-sm bg-light-mode dark:bg-dark-mode"
                >
                  <div className="w-8 mr-2 rounded-full">
                    <SvgIcon
                      className="w-6 h-6"
                      icon={
                        selectedTab === 'categories'
                          ? 'CategoryIcon'
                          : selectedTab === 'tags'
                          ? 'HashTagIcon'
                          : 'SpeakerRecitationIcon'
                      }
                    />
                  </div>
                  <div
                    className="flex items-center justify-between w-full text-gray-600 cursor-pointer dark:text-gray-400"
                    onClick={() => {
                      history.push(`/search/${selectedTab}/${key}`);
                    }}
                  >
                    <p className="text-sm font-medium truncate">{key}</p>
                    <p className="text-sm font-semibold">
                      🎬 {videosMeta[key]?.length}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SearchResult;
