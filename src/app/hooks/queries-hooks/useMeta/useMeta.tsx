import { useQuery, useQueryClient } from 'react-query';

import { getVideosMeta } from 'app/queries';
import { QueryKeys } from '../queryKey.enum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useMeta = (): any => {
  const queryClient = useQueryClient();

  return useQuery(QueryKeys.Meta, getVideosMeta, {
    initialData: () =>
      queryClient.getQueryCache().find(QueryKeys.Meta)?.state.data,
    refetchOnWindowFocus: false,
    suspense: true,
    staleTime: Infinity,
  });
};
