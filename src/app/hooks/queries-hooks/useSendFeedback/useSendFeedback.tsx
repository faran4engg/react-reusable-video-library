import { useMutation } from 'react-query';

import { sendFeedback } from 'app/queries';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSendFeedback = (): any =>
  useMutation(feedbackData => sendFeedback(feedbackData));
