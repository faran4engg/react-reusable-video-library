import { ReactElement } from 'react';

interface ChildrenProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentlyWatching?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  approvedVideos?: any;
  id: string;
}

export interface OwnProps {}
export interface RenderProps {
  children: (props: ChildrenProps) => ReactElement;
}

export interface MatchParams {
  id: string;
}
