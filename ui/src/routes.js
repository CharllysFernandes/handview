import MainTemplate from './templates/MainTemplate.vue';
import FullScreenTemplate from './templates/FullScreenTemplate.vue';

import BiblePage from './pages/BiblePage.vue';
import SongsPage from './pages/SongsPage.vue';
import ShowBiblePage from './pages/ShowBiblePage.vue';

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
