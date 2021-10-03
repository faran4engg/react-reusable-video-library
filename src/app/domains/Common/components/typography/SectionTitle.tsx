import { FC } from 'react';
import { SectionTitleProps } from './types';

const SectionTitle: FC<SectionTitleProps> = ({ children }) => (
  <h2 className="my-2 text-lg font-semibold text-gray-500 dark:text-gray-300">
    {children}
  </h2>
);

export default SectionTitle;
