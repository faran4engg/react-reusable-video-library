import { lazyLoad } from 'utils/loadable';
import { CardSkeleton } from 'app/domains/Common/components/loader';

export const HomePage = lazyLoad(
  () => import('./HomePage'),
  module => module.default,
  {
    fallback: (
      <div className="grid gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3">
        <CardSkeleton noOfCards={3} />
      </div>
    ),
  },
);
