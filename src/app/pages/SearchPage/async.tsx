import { lazyLoad } from 'utils/loadable';

export const SearchPage = lazyLoad(
  () => import('./SearchPage'),
  module => module.default,
);
