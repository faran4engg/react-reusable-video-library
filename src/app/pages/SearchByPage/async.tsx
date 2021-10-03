import { lazyLoad } from 'utils/loadable';

export const SearchByPage = lazyLoad(
  () => import('./SearchByPage'),
  module => module.default,
);
