import axios from 'axios';
import { 
    MOVIES_READ_SUCCESS,
    MOVIES_ERROR,

    MOVIE_READ_SUCCESS,
    MOVIE_ERROR,
} from './types';

const apiKey = 'c2ce4e5bba02c62b4aa4ab010efef2b5'

export const readMovies = () => async dispatch => {

    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);

    if (response.status === 200) {
        dispatch({
            type: MOVIES_READ_SUCCESS,
            payload: response.data.results
        })
    } else {
        dispatch({
            type: MOVIES_ERROR,
            payload: {
                error: 'Failed to Retrieve Movies'
            }
        })
    }
}

export const fetchMovie = (payload) => async dispatch => {
    
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${payload}?api_key=${apiKey}&append_to_response=videos`);
    
    if (response.status === 200) {
        dispatch({
            type: MOVIE_READ_SUCCESS,
            payload: response.data
        })
    } else {
        dispatch({
            type: MOVIE_ERROR,
            payload: {
                error: 'Failed to Retrieve Movie'
            }
        })
    }

}