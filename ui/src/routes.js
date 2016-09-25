import BiblePage from './pages/BiblePage';
import SongsPage from './pages/SongsPage';

const routes = [{
  path: '/',
  component: BiblePage,
}, {
  path: '/songs',
  component: SongsPage,
}];

export default routes;
