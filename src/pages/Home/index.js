import {
    getMovieToday, getMovieInWeek,
    getPopularMovie,
    getPopularMovieTrailers,
    getInThreatersMovieTrailers,
} from "~/services/index";
import {getDetailtMovie} from '~/services/movieDetailService'
import Poster from '~/components/Layout/components/Poster';
import SkeletonComponent from '~/components/Layout/components/Skeleton';
import classNames from "classnames/bind";
import styles from './Home.module.scss';

const cx = classNames.bind(styles)

function Home() {

    const fetchTrendingMovies = async (state) => {
        return state === "Today" ? await getMovieToday() : await getMovieInWeek();
    };

    const fetchPopularMovies = async () => {
        return await getPopularMovie();
    };

    const fetchTrailerMovies = async (state) => {
        // return state === "Popular" ? await getPopularMovieTrailers() : await getInThreatersMovieTrailers();
        const data = state === "Popular" ?
            await getPopularMovieTrailers() :
            await getInThreatersMovieTrailers();
        console.log("Trailer data:", data); // Add this line to inspect the data
        return data;
    }
    //const movieId = 99861;

    const handleCallDetailMovie = async () => {

        const data = await getDetailtMovie(99861);
        console.log("Movie detail data: ", data)
    }


    return (
        <>
        
        <div className={cx('banner')}>
                <div className={cx('content-inner')}>
                    <h1>Welcome.</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                    <div className={cx('search-inp')}>
                        <input placeholder='Search for a movie, tv show, person......' />
                        <button>Search</button>
                    </div>
                </div>
            </div>

            <Poster
                title="Trending Movies"
                options={["Today", "This Week"]}
                fetchData={fetchTrendingMovies}
                defaultValue="Today"
            // isTrailer={false}
            />

            <Poster
                title="Lasted Trailers"
                options={["Popular", "In Theaters"]}
                fetchData={fetchTrailerMovies}
                defaultValue="Popular"
                isTrailer={true}
            />

            <Poster
                title="Popular Movies"
                options={[]}
                fetchData={fetchPopularMovies}
            // isTrailer={false}
            />

            <div>
            <button onClick={handleCallDetailMovie()}>Call api</button>
            </div>
            <SkeletonComponent />

            <div>
            <button onClick={handleCallDetailMovie}>Call api</button>
            </div>
            <h1>Hello World</h1>
        </>
    )
}

export default Home;