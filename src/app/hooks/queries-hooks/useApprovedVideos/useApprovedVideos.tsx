import { useQuery, useQueryClient } from 'react-query';

import { getAllApprovedVideos } from 'app/queries';
import { QueryKeys } from '../queryKey.enum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useApprovedVideos = (): any => {
  const queryClient = useQueryClient();

  return useQuery(QueryKeys.ApprovedVideos, getAllApprovedVideos, {
    initialData: () =>
      queryClient.getQueryCache().find(QueryKeys.ApprovedVideos)?.state.data,
    refetchOnWindowFocus: false,
    suspense: true,
    staleTime: Infinity,
  });
};
