type Tabs = 'categories' | 'tags';

export interface SearchByProps {
  tabs: Tabs[];
  setSearchBy: (tab: Tabs) => void;
  selectedTab: Tabs;
}
