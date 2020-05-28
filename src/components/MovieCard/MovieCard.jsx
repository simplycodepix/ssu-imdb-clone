import React from 'react';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';

import './MovieCard.scss';

const MovieRow = ({ className, title, value, children }) => (
    <div className={`movie-card-row ${className ? className : ''}`}>
        <div className="movie-card-row-title">{title}</div>
        {value && <div className="movie-card-row-value">{value}</div>}
        {children && <div className="movie-card-row-value">{children}</div>}
    </div>
);

const MovieLink = ({ movie_id }) => (
    <Link className="movie-card-link" to={`/movie/${movie_id}`}></Link>
);

export const MovieCard = ({ movie }) => {
    const getLimitedString = (string, limit) => {
        if (string.length > limit) return string.substr(0, limit) + '...';

        return string;
    }

    return (
        <div className="movie-card">
            <div className="movie-card-content">
                <MovieRow className="row" title="ID:" value={movie.id} />
                <MovieRow className="row" title="Title:" value={movie.title} />
                <MovieRow title="Description:" value={getLimitedString(movie.description, 100)} />
                <MovieRow className="row center" title="Year:" value={movie.year} />
                {movie.genres && <MovieRow className="row center" title="Genres:" value={movie.genres} />}
                {movie.locations && <MovieRow className="row center" title="Locations:" value={movie.locations} />}
                {movie.rating && <MovieRow className="row center" title="Rating:">
                    <Rating value={movie.rating} />
                </MovieRow>}
                <MovieLink movie_id={movie.id} />
            </div>
        </div>
    );
};

export default MovieCard;