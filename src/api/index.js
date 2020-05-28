import axios from 'axios';
import qs from 'querystring';

export const getMovies = async ({ limit, offset, top }) => {
    const { data } = await axios.get(`http://localhost:8042/api/movie/list?limit=${limit}&offset=${offset}&top=${top}`);
    return data;
}

export const getMoviesTableData = async () => {
    const { data } = await axios.get(`http://localhost:8042/api/crud/movies/get`);
    return data;
}

export const getUserTableData = async () => {
    const { data } = await axios.get(`http://localhost:8042/api/crud/users/get`);
    return data;
}

export const getGenreTableData = async () => {
    const { data } = await axios.get(`http://localhost:8042/api/crud/genres/get`);
    return data;
}

export const getRatingTableData = async () => {
    const { data } = await axios.get(`http://localhost:8042/api/crud/rating/get`);
    return data;
}

export const getLocationTableData = async () => {
    const { data } = await axios.get(`http://localhost:8042/api/crud/locations/get`);
    return data;
}

export const getMovie = async ({ id }) => {
    const { data } = await axios.get(`http://localhost:8042/api/movie/${id}`);
    return data;
}

export const getRatingsForMovie = async ({ id }) => {
    const { data } = await axios.get(`http://localhost:8042/api/movie/${id}/ratings`);
    return data;
}

export const addRating = async (payload) => {
    const { data } = await axios.post(`http://localhost:8042/api/rating/add`, qs.stringify(payload));
    return data;
}

export const registerUser = async (userData) => {
    const { data } = await axios.post(`http://localhost:8042/api/user/registration`, qs.stringify(userData));
    return data;
}

export const authUser = async (credentials) => {
    const { data } = await axios.post(`http://localhost:8042/api/user/login`, qs.stringify(credentials));
    return data;
}

export const getUserProfile = async ({ id }) => {
    const { data } = await axios.get(`http://localhost:8042/api/user/${id}`);
    return data;
}