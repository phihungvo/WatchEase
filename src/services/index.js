import axios from "axios";

// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// const BASE_URL = process.env.REACT_APP_BASE_URL;


const API_KEY = process.env.REACT_APP_TMDB_API_KEY || 'aad34a977eb04581217d21401cd37a60';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://api.themoviedb.org/3';

if (!BASE_URL) {
    console.error("⚠️ BASE_URL is undefined! Check your .env file.");
}

// Create axios instance with baseURL
const tmdbApi = axios.create({
    baseURL: BASE_URL
});

// export const searchMovies = async (query) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/search/movie`, {
//             params: {
//                 api_key: API_KEY,
//                 query: query,
//             },
//         });

//         return response.data.results;
//     } catch (error) {
//         console.error("Error fetching search movies ", error)
//         return [];
//     }
// }

// https://api.themoviedb.org/3/search/multi?query=b&page=500&api_key=aad34a977eb04581217d21401cd37a60
export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/multi`, {
            params: {
                api_key: API_KEY,
                page: 1,
                query: query,
            },
        });
        console.error("Fetching successfully search multi type... ", response.data.results)
        return response.data.results;
    } catch (error) {
        console.error("Error fetching search multi type... ", error)
        return [];
    }
}

export const getMovieToday = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
            params: {
                api_key: API_KEY
            },
        });

        return response.data.results;
    } catch (error) {
        console.error("Error fetching movies today: ", error)
        return [];
    }
}


export const getMovieInWeek = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
            params: {
                api_key: API_KEY
            },
        });

        return response.data.results;
    } catch (error) {
        console.error("Error fetching movies in this week: ", error)
        return [];
    }
}

// https://api.themoviedb.org/3/movie/popular?api_key=
export const getPopularMovie = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY
            },
        });
        console.log('>>>>>response.data.results: ', response.data.results);

        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies: ", error)
        return [];
    }
}


// Lấy phim đang chiếu phổ biến (popular) và thông tin video trailers của các phim đó
export const getPopularMovieTrailers = async () => {
    try {
        // First get popular movies
        const moviesResponse = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY
            },
        });

        const movies = moviesResponse.data.results;
        console.log('>>getPopularMovieTrailers: ', movies)

        // For each movie, fetch its videos
        // Sử dụng Promise.all(...) để chạy nhiều request API cùng lúc (tối ưu hóa tốc độ).
        const moviesWithTrailers = await Promise.all(
            movies.slice(0, 10).map(async (movie) => {
                try {
                    const videosResponse = await axios.get(`${BASE_URL}/movie/${movie.id}/videos`, {
                        params: {
                            api_key: API_KEY
                        },
                    });

                    // https://api.themoviedb.org/3/movie/950396/images?api_key=aad34a977eb04581217d21401cd37a60
                    const imageOfMovie = await axios.get(`${BASE_URL}/movie/${movie.id}/images`, {
                        params: {
                            api_key: API_KEY
                        },
                    });

                    const file_path = imageOfMovie.data.backdrops[0];
                    console.log('file path :>>>>>', file_path.file_path)

                    // const trailers = videosResponse.data.results.filter(
                    //     video => video.type === 'Trailer' && video.site === 'Youtube'
                    // );

                    const trailers = videosResponse.data.results.filter(
                        video => video.type === 'Trailer' && (video.site === 'Youtube' || video.site === 'YouTube')
                    );

                    // console.log('Filtered trailers:', videosResponse.data.results.filter(
                    //     video => video.type.toLowerCase() === 'trailer' && video.site.toLowerCase() === 'youtube'
                    // ));
                    console.log('Available videos for movie:', movie.title, trailers);
                    console.log('>>>> Available videos for movie :', trailers[0], trailers[0].key);

                    return {
                        ...movie,
                        trailer_key: trailers.length > 0 ? trailers[0].key : null,
                        image_path: file_path.file_path
                    }
                } catch (error) {
                    console.error(`Error fetching videos for movie ${movie.id}:`, error);
                    return {
                        ...movie,
                        trailer_key: null,
                        image_path: null
                    };
                }
            })
        );

        return moviesWithTrailers.filter(movie => movie.trailer_key !== null);
    } catch (error) {
        console.error("Error fetching popular movie trailers:", error);
        return [];
    }
}

// Lấy phim đang chiếu trong rạp (in theaters) và thông tin video trailers của các phim đó
export const getInThreatersMovieTrailers = async () => {
    try {
        const moviesResponse = await axios.get(`${BASE_URL}/movie/now_playing`, {
            params: {
                api_key: API_KEY
            },
        });

        const movies = moviesResponse.data.results;

        // Lặp qua từng phim và lấy video trailer.
        const moviesWithTrailers = await Promise.all(
            movies.slice(0, 10).map(async (movie) => {
                try {
                    const videoResponse = await axios.get(`${BASE_URL}/movie/${movie.id}/videos`, {
                        params: {
                            api_key: API_KEY
                        },
                    });

                    const imageOfMovie = await axios.get(`${BASE_URL}/movie/${movie.id}/images`, {
                        params: {
                            api_key: API_KEY
                        },
                    });

                    const file_path = imageOfMovie.data.backdrops[0]
                    console.log('file path>>>>>: ', file_path.file_path)

                    const trailers = videoResponse.data.results.filter(
                        video => video.type === 'Trailer' && video.site === 'Youtube'
                    );

                    return {
                        ...movie,
                        trailer_key: trailers.length > 0 ? trailers[0].key : null,
                        image_path: file_path.file_path
                    };
                } catch (error) {
                    console.error(`Error fetching videos for movie ${movie.id}:`, error);
                    return {
                        ...movie,
                        trailer_key: null,
                        image_path: null
                    };
                }
            })
        );

        return moviesWithTrailers.filter(movie => movie.trailer_key !== null);
    } catch (error) {
        console.error("Error fetching in theaters movie trailers:", error);
        return [];
    }
}
