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

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: query,
            },
        });

        return response.data.results;
    } catch (error) {
        console.error("Error fetching search movies ", error)
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
        console.error("Error fetching search movies ", error)
        return [];
    }
}
