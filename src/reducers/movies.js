import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIES, GET_NUMBER } from '../actions';

const initialState = {
    movies: [],
    number: 0
}

export const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MOVIE:
            return {
                movies: action.playload,
                number: action.playload.length
            }
        case REMOVE_MOVIE:
            return {
                movies: action.playload,
                number: state.number - 1
            }
        case GET_MOVIES:
            return {
                ...state,
                movies: action.playload
            }
        case GET_NUMBER:
            return {
                ...state,
                number: action.playload
            }
        default:
            return state;
    }

}

