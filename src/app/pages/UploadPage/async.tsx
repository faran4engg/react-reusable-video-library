import { lazyLoad } from 'utils/loadable';

export const UploadPage = lazyLoad(
  () => import('./UploadPage'),
  module => module.default,
);
