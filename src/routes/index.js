import Home from '~/pages/Home';
import Movie from '~/pages/Movie';
import TVShow from '~/pages/TVShow';
import People from '~/pages/People';
import More from '~/pages/More';

const publicRoutes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/movie', component: Movie, title: 'Movies' },
    { path: '/tv-show', component: TVShow, title: 'TV Shows' },
    { path: '/people', component: People, title: 'People' },
    { path: '/more', component: More, title: 'More' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
