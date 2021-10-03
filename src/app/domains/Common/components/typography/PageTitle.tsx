import { FC } from 'react';
import { PageTitleProps } from './types';

const PageTitle: FC<PageTitleProps> = ({ children }) => (
  <h1 className="my-3 font-semibold text-gray-500 text-1xl dark:text-gray-300">
    {children}
  </h1>
);

export default PageTitle;
