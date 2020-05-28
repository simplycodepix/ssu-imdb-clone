import React, { useState, useContext, useEffect } from 'react';
import Rating from '../Rating/Rating';
import { addRating } from '../../api';

import UserRating from '../../components/UserRating/UserRating';

import './Movie.scss';
import { AddRatingForm } from '../AddRatingForm/AddRatingForm';
import { AuthContext } from '../../store/AuthProvider';

const MovieRow = ({ className, title, value, children }) => (
    <div className={`movie-row ${className ? className : ''}`}>
        <div className="movie-row-title">{title}</div>
        {value && <div className="movie-row-value">{value}</div>}
        {children && <div className="movie-row-value">{children}</div>}
    </div>
);

const MovieRatings = ({ usersRating }) => (
    <div className="movie-ratings">
        <div className="movie-ratings-title">
            User Ratings:
        </div>
        {usersRating && <div className="user-ratings">
            {usersRating.map((user, i) => <UserRating key={'rating_' + i} user={user} />)}
        </div>}
    </div>
);

export const Movie = ({ movie, usersRating, requestLoadRating }) => {
    const [ratings, setRatings] = useState([]);
    const [userRating, setUserRating] = useState({});
    const [selectedRating, setSelectedRating] = useState(1);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const { authenticated, user } = useContext(AuthContext);

    useEffect(() => {
        if (usersRating) setRatings(usersRating);
        checkAlreadyRated();
    }, [ratings, usersRating, user]);

    const checkAlreadyRated = () => {
        if (!ratings || !user) return;

        let rating = ratings.find(one => one.id === user.id);
        if (rating) {
            setDisabled(true);
            setUserRating(rating);
        }
    };

    const handleRatingChange = (event) => {
        const { value } = event.target;
        setSelectedRating(value);
    };

    const handleFormSubmit = async (event) => {
        if (loading || !authenticated || !user.id) return;
        setLoading(true);
        event.preventDefault();

        const ratingData = {
            rating: selectedRating,
            movie_id: movie.id,
            user_id: user.id
        };

        await addRating(ratingData);

        setLoading(false);
        requestLoadRating();
    };

    return (
        <div className="movie">
            <div className="movie-content">
                <MovieRow className="row" title="ID:" value={movie.id} />
                <MovieRow className="row" title="Title:" value={movie.title} />
                <MovieRow title="Description:" value={movie.description} />
                <MovieRow className="row center" title="Year:" value={movie.year} />
                {movie.genres && <MovieRow className="row center" title="Genres:" value={movie.genres} />}
                {movie.locations && <MovieRow className="row center" title="Locations:" value={movie.locations} />}
                {movie.rating && <MovieRow className="row center" title="Rating:">
                    <Rating value={movie.rating} />
                </MovieRow>}
            </div>
            <MovieRatings usersRating={usersRating} />
            {authenticated && user && <AddRatingForm rating={userRating.rating} disabled={disabled} onChange={handleRatingChange} onSubmit={handleFormSubmit} />}
        </div>
    );
};

export default Movie;