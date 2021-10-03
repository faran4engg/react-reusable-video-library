import { useMutation } from 'react-query';
import { updateMeta } from 'app/queries';

export const usePutMeta = () =>
  useMutation(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (updatedMeta: any) => updateMeta(updatedMeta),
  );
