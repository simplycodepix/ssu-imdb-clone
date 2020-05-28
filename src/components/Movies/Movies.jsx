import React, { useState, useEffect } from 'react';
import { getMovies } from '../../api';

import MovieCard from '../MovieCard/MovieCard';

import './Movies.scss';
import Pagination from '../Pagination/Pagination';

export const Movies = ({ top = false }) => {
    const [loading, setLoading] = useState(true);
    const [moviesCount, setMoviesCount] = useState(0);
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (top) {
            loadMovies({ limit: 6, offset: 0, top: 5 });
        } else {
            loadMovies({ limit: 12, offset: 0 });
        }
    }, [top]);

    const loadMovies = async ({ limit, offset, top }) => {
        setLoading(true);
        const { movies, count } = await getMovies({ limit, offset, top });
        setMovies(movies);
        setMoviesCount(count);
        setLoading(false);
    }

    const changePage = (index) => {
        setCurrentPage(index);
        loadMovies({ limit: 12, offset: (index - 1) * 12 })
    }

    return (
        <div className="movies">
            <div className="container">
                {loading && <div className="loading">Loading...</div>}
                <div className="movies-list">
                    {movies.map(movie => <MovieCard key={`movie_${movie.id}`} movie={movie} />)}
                </div>
                {!top && <Pagination onClick={changePage} count={moviesCount} currentPage={currentPage} />}
            </div>
        </div>
    );
}

export default Movies;