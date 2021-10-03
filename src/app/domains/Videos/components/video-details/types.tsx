export interface VideoDetailsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details?: any;
  watchVideo?: () => void;
  showWatchBtn?: boolean;
  showMoreDetails: boolean;
  videoViewUrl: string;
}
