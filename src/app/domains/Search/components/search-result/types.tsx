type Tabs = 'categories' | 'tags';

export interface SearchResultProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  videosMeta: any;
  selectedTab: Tabs;
}
