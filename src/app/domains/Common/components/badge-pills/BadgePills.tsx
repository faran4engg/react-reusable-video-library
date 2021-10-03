import { FC } from 'react';
import { SvgIcon } from '../svg-icon';

interface BadgePillsProps {
  name: string;
  onClick: () => void;
}
const BadgePills: FC<BadgePillsProps> = ({ name, onClick }) => (
  <span
    className="inline-flex items-center py-1 px-2 mr-1 mb-2 text-xs rounded-full cursor-pointer bg-light-mode-content-bg text-light-mode-text dark:text-light-mode dark:bg-dark-mode-content-bg md:mr-2"
    onClick={onClick}
  >
    <SvgIcon className="mr-1 w-3 h-3" icon="HashTagIcon" />
    {name}
  </span>
);

export default BadgePills;
