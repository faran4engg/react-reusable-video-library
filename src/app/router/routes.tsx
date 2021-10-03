import { HomePage } from 'app/pages/HomePage/async';
import { NotFoundPage } from 'app/pages/NotFoundPage/async';
import { UploadPage } from 'app/pages/UploadPage/async';
import { WatchPage } from 'app/pages/WatchPage/async';
import { SearchPage } from 'app/pages/SearchPage/async';
import { AboutPage } from 'app/pages/AboutPage/async';
import { SearchByPage } from 'app/pages/SearchByPage/async';
import { FeedbackPage } from 'app/pages/FeedbackPage/async';

const routes = [
  {
    component: HomePage, // view rendered
    path: '/home', // the url
  },
  {
    component: UploadPage,
    path: '/upload',
  },
  {
    component: SearchPage,
    path: '/search',
  },
  {
    component: SearchByPage,
    path: '/search/:name/:id',
  },
  {
    component: WatchPage,
    path: '/watch/:id',
  },
  {
    component: AboutPage,
    path: '/about',
  },
  {
    component: NotFoundPage,
    path: '/404',
  },
  {
    component: FeedbackPage,
    path: '/feedback',
  },
];

export default routes;
