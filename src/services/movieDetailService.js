import axios from "axios";

// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// const BASE_URL = process.env.REACT_APP_BASE_URL;


const API_KEY = process.env.REACT_APP_TMDB_API_KEY || 'aad34a977eb04581217d21401cd37a60';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://api.themoviedb.org/3';

if (!BASE_URL) {
    console.error("⚠️ BASE_URL is undefined! Check your .env file.");
}

// https://api.themoviedb.org/3/movie/99861?api_key=aad34a977eb04581217d21401cd37a60
export const getDetailtMovie = async (movieId) => {
    try{
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
            }
        });

        console.log('Reponse detail movie: ', response.data.results)
    }catch(error){
        console.log('Get Detail Movie with error: ', error);
        return []
    }
}