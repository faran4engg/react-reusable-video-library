import { useQuery } from 'react-query';
import { getAllCategories } from 'app/queries';
import { QueryKeys } from '../queryKey.enum';

export const useMetaCategories = () =>
  useQuery(QueryKeys.MetaCategories, getAllCategories, {
    refetchOnWindowFocus: false,
    suspense: true,
  });
