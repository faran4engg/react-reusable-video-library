import { useQuery } from 'react-query';
import { getVideosByTagName } from 'app/queries';
import { QueryKeys } from '../queryKey.enum';

export const useTrendingVideoIds = ({ shouldFetch }) =>
  useQuery(
    QueryKeys.TrendingVideoIds,
    () => getVideosByTagName('islaamify360'),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      staleTime: Infinity,
      enabled: shouldFetch,
    },
  );
