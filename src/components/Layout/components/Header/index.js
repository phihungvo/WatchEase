import NavMenu from '../NavMenu'
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faBell, faLanguage, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import SearchMovie from '../Search/index'
import { useDebounce } from '~/hooks';
import {
    searchMovies,
    getMovieToday, getMovieInWeek,
    getPopularMovie,
    getPopularMovieTrailers,
    getInThreatersMovieTrailers,
} from "~/services";
import Poster from '../Poster';

const cx = classNames.bind(styles)

function Header() {
    const trendingStates = [
        'Today',
        'This Week'
    ]

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [selectedState, setSelectedState] = useState(trendingStates[0]);

    const debounced = useDebounce(searchValue, 400);

    const inputRef = useRef()

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    }

    const hanleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

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

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchMovies = async () => {
            try {
                const results = await searchMovies(debounced);
                setSearchResult(results);
                setLoading(false);
                console.log('Success when get movies.', results);
            } catch (error) {
                setLoading(false);
                console.log('Error when get movies.');
            }
        };

        fetchMovies();
    }, [debounced]);

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('sub_media')}>
                        <div className={cx('leftMenu')}>
                            <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                            <NavMenu />
                        </div>
                        <div className={cx('rightMenu')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                            <FontAwesomeIcon className={cx('icon')} icon={faLanguage} />

                            <div className={cx('badge')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faBell} />
                                <div className={cx('count')}> 1 </div>
                            </div>
                            <Tippy content="Hồ sơ và cài đặt!" >
                                <div className={cx('icon')}>
                                    <img src='https://haycafe.vn/wp-content/uploads/2022/10/Hinh-anh-gai-xinh-Viet-Nam-cuoi-tuoi-tan.jpg' />
                                </div>
                            </Tippy>
                            <FontAwesomeIcon className={cx('icon', 'search')} icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
            </ header>
            <div className={cx('search-bar')}>
                <div className={cx('search-form')}>
                    <FontAwesomeIcon
                        className={cx()}
                        icon={faMagnifyingGlass} />

                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Search for a movie, tv show or person ..."
                        onChange={hanleInputChange} />

                    <div className={'status_loading'}>
                        {
                            !!searchValue && !loading &&
                            <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        }
                        {loading &&
                            <FontAwesomeIcon
                                className={cx('loading')}
                                icon={faSpinner}
                            />
                        }
                    </div>
                </div>
            </div>
            {
                searchResult?.length > 0 && <SearchMovie movieData={searchResult} />
            }

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

        </>
    );
}

export default Header;