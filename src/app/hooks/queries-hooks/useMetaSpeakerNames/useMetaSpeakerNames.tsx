import { useQuery } from 'react-query';
import { getAllSpeakerNames } from 'app/queries';
import { QueryKeys } from '../queryKey.enum';

export const useMetaSpeakerNames = ({ shouldFetch }) =>
  useQuery(QueryKeys.MetaSpeakerNames, getAllSpeakerNames, {
    refetchOnWindowFocus: false,
    suspense: true,
    enabled: shouldFetch,
  });
