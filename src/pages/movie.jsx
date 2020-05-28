import React, { useEffect, useState } from 'react';
import { getMovie, getRatingsForMovie } from '../api';

import Movie from '../components/Movie/Movie';

export const MoviePage = ({ match }) => {
    const [loading, setLoading] = useState(true);
    const [loadingRatings, setLoadingRatings] = useState(true);
    const [movie, setMovie] = useState(null);
    const [usersRating, setUsersRating] = useState(null);

    useEffect(() => {
        loadMovie();
        loadMovieRatings();
    }, []);

    const loadMovie = async () => {
        const movie_id = match.params.id;
        const { movie } = await getMovie({ id: movie_id });
        setMovie(movie);
        setLoading(false);
    }

    const loadMovieRatings = async () => {
        const movie_id = match.params.id;
        const usersRating = await getRatingsForMovie({ id: movie_id });
        setUsersRating(usersRating);
        setLoadingRatings(false);
    };

    return (
        <div className="container">
            {loading && <div className="loading">Loading...</div>}
            {movie && <Movie requestLoadRating={loadMovieRatings} usersRating={usersRating} movie={movie} />}
            {loadingRatings && <div className="loading">Loading Ratings...</div>}
        </div>
    );
};

export default MoviePage;