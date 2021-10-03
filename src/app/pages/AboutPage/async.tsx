import { lazyLoad } from 'utils/loadable';

export const AboutPage = lazyLoad(
  () => import('./AboutPage'),
  module => module.default,
);
