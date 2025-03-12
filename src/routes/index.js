import Home from '~/pages/Home';
import Movie from '~/pages/Movie';
import TVShow from '~/pages/TVShow';
import People from '~/pages/People';
import More from '~/pages/More';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/movie', component: Movie },
    { path: '/tv-show', component: TVShow },
    { path: '/people', component: People },
    { path: '/more', component: More },
]
const privateRoutes = [];

export { publicRoutes, privateRoutes }