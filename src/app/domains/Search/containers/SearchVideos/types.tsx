/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export type Tabs = 'categories' | 'tags' | 'speakerNames';

interface ChildrenProps {
  approvedVideos?: any;
  tabs: Tabs[];
  handleSelectedTab: (tab: Tabs) => void;
  selectedTab: Tabs;
  videosMeta: any;
  search: string;
  isLoading: boolean;
  searchFor: any;
  videos: any;
}

export interface OwnProps {}
export interface RenderProps {
  children: (props: ChildrenProps) => ReactNode;
}
