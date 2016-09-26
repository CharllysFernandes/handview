import MainTemplate from './templates/MainTemplate';
import FullScreenTemplate from './templates/FullScreenTemplate';

import BiblePage from './pages/BiblePage';
import SongsPage from './pages/SongsPage';
import ShowBiblePage from './pages/ShowBiblePage';

const routes = [{
  path: '/',
  component: MainTemplate,
  children: [{
    path: '',
    component: BiblePage,
  }, {
    path: 'songs',
    component: SongsPage,
  }],
}, {
  path: '/full',
  component: FullScreenTemplate,
  children: [{
    path: 'show_bible',
    component: ShowBiblePage,
  }],
}];

export default routes;
