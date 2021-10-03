import { lazyLoad } from 'utils/loadable';

export const WatchPage = lazyLoad(
  () => import('./WatchPage'),
  module => module.default,
);
