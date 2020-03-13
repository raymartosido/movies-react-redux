import {
    MOVIES_READ_SUCCESS,
    MOVIES_ERROR,

    MOVIE_READ_SUCCESS,
    MOVIE_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    movies: [],
    movieInfo: {},
    error: ''
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case MOVIES_READ_SUCCESS:
            return {
                ...state,
                movies: action.payload
            }
        case MOVIES_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        case MOVIE_READ_SUCCESS:
            return {
                ...state,
                movieInfo: action.payload
            }
        case MOVIE_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
}