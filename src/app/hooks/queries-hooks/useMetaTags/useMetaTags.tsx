import { useQuery } from 'react-query';
import { getAllTags } from 'app/queries';
import { QueryKeys } from '../queryKey.enum';

export const useMetaTags = ({ shouldFetch }) =>
  useQuery(QueryKeys.MetaTags, getAllTags, {
    refetchOnWindowFocus: false,
    suspense: true,
    enabled: shouldFetch,
  });
