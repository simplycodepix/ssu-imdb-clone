import axios from 'axios';
import qs from 'querystring';

const localApiURL = `http://localhost:804s2/api`;
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