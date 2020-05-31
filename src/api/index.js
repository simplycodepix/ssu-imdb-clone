import axios from 'axios';
import qs from 'querystring';
import { MOVIES, USERS, RATINGS, GENRES, LOCATIONS } from '../store/types';

const localApiURL = `http://localhost:8042/api`;
const apiURL = `http://imdb.god-development.com/api`;

export const getMovies = async ({ limit, offset, top }) => {
    const { data } = await axios.get(`${apiURL}/movie/list?limit=${limit}&offset=${offset}&top=${top}`);
    return data;
}

export const getMoviesTableData = async () => {
    const { data } = await axios.get(`${apiURL}/crud/movies/get`);
    return data;
}

export const getUserTableData = async () => {
    const { data } = await axios.get(`${apiURL}/crud/users/get`);
    return data;
}

export const getGenreTableData = async () => {
    const { data } = await axios.get(`${apiURL}/crud/genres/get`);
    return data;
}

export const getRatingTableData = async () => {
    const { data } = await axios.get(`${apiURL}/crud/rating/get`);
    return data;
}

export const getLocationTableData = async () => {
    const { data } = await axios.get(`${apiURL}/crud/locations/get`);
    return data;
}

export const getMovie = async ({ id }) => {
    const { data } = await axios.get(`${apiURL}/movie/${id}`);
    return data;
}

export const getRatingsForMovie = async ({ id }) => {
    const { data } = await axios.get(`${apiURL}/movie/${id}/ratings`);
    return data;
}

export const addRating = async (payload) => {
    const { data } = await axios.post(`${apiURL}/rating/add`, qs.stringify(payload));
    return data;
}

export const registerUser = async (userData) => {
    const { data } = await axios.post(`${apiURL}/user/registration`, qs.stringify(userData));
    return data;
}

export const authUser = async (credentials) => {
    const { data } = await axios.post(`${apiURL}/user/login`, qs.stringify(credentials));
    return data;
}

export const getUserProfile = async ({ id }) => {
    const { data } = await axios.get(`${apiURL}/user/${id}`);
    return data;
}

// Delete

export const deleteUser = async ({ user_id }) => {
    const { data } = await axios.post(`${apiURL}/crud/users/delete`, qs.stringify({ user_id }));
    return data;
}

export const deleteGenre = async ({ genre_id }) => {
    const { data } = await axios.post(`${apiURL}/crud/genres/delete`, qs.stringify({ genre_id }));
    return data;
}

export const deleteRating = async ({ movie_id, user_id }) => {
    const { data } = await axios.post(`${apiURL}/crud/rating/delete`, qs.stringify({ movie_id, user_id }));
    return data;
}

export const deleteLocation = async ({ location_id }) => {
    const { data } = await axios.post(`${apiURL}/crud/locations/delete`, qs.stringify({ location_id }));
    return data;
}

export const deleteMovie = async ({ movie_id }) => {
    const { data } = await axios.post(`${apiURL}/crud/movies/delete`, qs.stringify({ movie_id }));
    return data;
}

export const deleteFromTable = async ({ table, payload }) => {
    let response;

    switch (table) {
        case MOVIES:
            response = await deleteMovie({ movie_id: payload.id });
            break;
        case USERS:
            response = await deleteUser({ user_id: payload.id });
            break;
        case RATINGS:
            response = await deleteRating({ movie_id: payload.movie_id, user_id: payload.user_id });
            break;
        case GENRES:
            response = await deleteGenre({ genre_id: payload.id });
            break;
        case LOCATIONS:
            response = await deleteLocation({ location_id: payload.id });
            break;
        default:
            break;
    }

    return response;
};

// Get Single
export const getSingleMovie = async ({ movie_id }) => {
    const { data } = await axios.get(`${apiURL}/crud/movies/getSingle?movie_id=${movie_id}`);
    return data.movie;
}

export const getSingleUser = async ({ user_id }) => {
    const { data } = await axios.get(`${apiURL}/crud/users/getSingle?user_id=${user_id}`);
    return data.user;
}

export const getSingleGenre = async ({ genre_id }) => {
    const { data } = await axios.get(`${apiURL}/crud/genres/getSingle?genre_id=${genre_id}`);
    return data.genre;
}

export const getSingleLocation = async ({ location_id }) => {
    const { data } = await axios.get(`${apiURL}/crud/locations/getSingle?location_id=${location_id}`);
    return data.location;
}

export const getSingleRating = async ({ movie_id, user_id }) => {
    const { data } = await axios.get(`${apiURL}/crud/rating/getSingle?movie_id=${movie_id}&user_id=${user_id}`);
    return data.rating;
}

export const getSingle = async ({ table, payload }) => {
    let response;

    switch (table) {
        case MOVIES:
            response = await getSingleMovie({ movie_id: payload.id });
            break;
        case USERS:
            response = await getSingleUser({ user_id: payload.id });
            break;
        case RATINGS:
            response = await getSingleRating({ movie_id: payload.movie_id, user_id: payload.user_id });
            break;
        case GENRES:
            response = await getSingleGenre({ genre_id: payload.id });
            break;
        case LOCATIONS:
            response = await getSingleLocation({ location_id: payload.id });
            break;
        default:
            break;
    }

    return response;
};

// Update

export const updateUser = async ({ payload }) => {
    const { data } = await axios.post(`${apiURL}/crud/users/update`, qs.stringify({ ...payload }));
    return data;
}

export const updateGenre = async ({ payload }) => {
    const { data } = await axios.post(`${apiURL}/crud/genres/update`, qs.stringify({ ...payload }));
    return data;
}

export const updateRating = async ({ payload }) => {
    const { data } = await axios.post(`${apiURL}/crud/rating/update`, qs.stringify({ ...payload }));
    return data;
}

export const updateLocation = async ({ payload }) => {
    const { data } = await axios.post(`${apiURL}/crud/locations/update`, qs.stringify({ ...payload }));
    return data;
}

export const updateMovie = async ({ payload }) => {
    const { data } = await axios.post(`${apiURL}/crud/movies/update`, qs.stringify({ ...payload }));
    return data;
}

export const updateTable = async ({ table, payload }) => {
    let response;

    switch (table) {
        case MOVIES:
            response = await updateMovie({ payload });
            break;
        case USERS:
            response = await updateUser({ payload });
            break;
        case RATINGS:
            response = await updateRating({ payload });
            break;
        case GENRES:
            response = await updateGenre({ payload });
            break;
        case LOCATIONS:
            response = await updateLocation({ payload });
            break;
        default:
            break;
    }

    return response;
};