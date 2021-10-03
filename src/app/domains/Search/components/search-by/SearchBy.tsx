import { FC } from 'react';
import { SearchByProps } from './types';

const SearchBy: FC<SearchByProps> = ({ setSearchBy, selectedTab, tabs }) => {
  return (
    <ul className="flex justify-center list-reset">
      {tabs.map(tab => (
        <li
          key={tab}
          onClick={() => setSearchBy(tab)}
          className={`text-center py-3 px-0 mx-3 cursor-pointer
					${
            selectedTab === tab
              ? 'border-b-2 border-solid border-gray-800 dark:border-gray-500'
              : ''
          } `}
        >
          <span className="capitalize">{tab}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchBy;
