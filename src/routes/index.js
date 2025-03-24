import Home from '~/pages/Home';
import Movie from '~/pages/Movie';
import TVShow from '~/pages/TVShow';
import People from '~/pages/People';
import More from '~/pages/More';
import SearchResult from '~/pages/SearchResult';
import MovieDetail from '~/pages/MovieDetail';

const publicRoutes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/movie', component: Movie, title: 'Movies' },
    { path: '/tv-show', component: TVShow, title: 'TV Shows' },
    { path: '/people', component: People, title: 'People' },
    { path: '/more', component: More, title: 'More' },
    { path: '/search', component: SearchResult, title: 'Search Result' }, // Xóa để tránh hiển thị ra Navbar
    { path: '/movie/:id', component: MovieDetail, title: 'Movie Detail' },
];

// const resultsRoutes = [
//     { path: '/search', component: SearchResult, title: 'Search Result' },
// ];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
