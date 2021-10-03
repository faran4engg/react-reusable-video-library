import { lazyLoad } from 'utils/loadable';

export const FeedbackPage = lazyLoad(
  () => import('./FeedbackPage'),
  module => module.default,
);
