const mainRoutes = [
  {
    exact: true,
    icon: 'TrendingIcon',
    name: 'Trending',
    path: '/home',
  },
  {
    exact: true,
    icon: 'UrduHindiIcon',
    name: 'اردو / हिन्दी ',
    path: '/search/tags/urdu',
  },
  {
    exact: true,
    icon: 'EnglishIcon',
    name: 'English',
    path: '/search/tags/english',
  },
  {
    exact: true,
    icon: 'SearchVideoIcon',
    name: 'Search',
    path: '/search',
  },
];

const searchRoutes = [
  {
    exact: true,
    icon: 'LoveIcon',
    name: 'Omar Series',
    path: '/search/speakerNames/mbc',
  },
  {
    exact: true,
    icon: 'SpeakerRecitationIcon',
    name: 'Recitation',
    path: '/search/categories/recitation',
  },
  {
    exact: true,
    icon: 'BabyBoyIcon',
    name: 'Animation',
    path: '/search/categories/prophet-series',
  },
  {
    exact: true,
    icon: 'QuranIcon',
    name: 'Tafseer',
    path: '/search/tags/tafseer',
  },
  {
    exact: true,
    icon: 'InspirationIcon',
    name: 'Inspiration',
    path: '/search/categories/inspiration-series-urdu',
  },
];

const infoRoutes = [
  {
    exact: true,
    icon: 'UploadIcon',
    name: 'Upload Video',
    path: '/upload',
  },
  {
    exact: true,
    icon: 'InfoIcon',
    name: 'About Us',
    path: '/about',
  },
  {
    exact: true,
    icon: 'FeedbackIcon',
    name: 'Feedback',
    path: '/feedback',
  },
];

export { mainRoutes, searchRoutes, infoRoutes };
