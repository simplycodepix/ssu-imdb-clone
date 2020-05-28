import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../store/AuthProvider';
import { getUserProfile } from '../api';
import MovieCard from '../components/MovieCard/MovieCard';
import Rating from '../components/Rating/Rating';

const ProfileGenre = ({ name, rating }) => (
    <div className="genre">
        <div className="genre-name">{name}</div>
        <div className="genre-rating"><Rating value={rating} /></div>
    </div>
);

const ProfileRow = ({ name, value }) => (
    <div className="row">
        <div className="row-name">{name}</div>
        <div className="row-value">{value}</div>
    </div>
);

export const ProfilePage = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({
        ratedMovies: [],
        preferedGenres: []
    });
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) loadUserProfile();
    }, [user]);

    const loadUserProfile = async () => {
        const profile = await getUserProfile({ id: user.id });
        setProfile(profile);
        setLoading(false);
    }

    return (
        <div className="container">
            {loading && <div className="loading">Loading...</div>}

            <h2>My Info</h2>
            <div className="table">
                <ProfileRow name="ID:" value={profile.id} />
                <ProfileRow name="Name:" value={`${profile.firstName} ${profile.lastName}`} />
                <ProfileRow name="Username:" value={profile.username} />
                <ProfileRow name="Email:" value={profile.email} />
                <ProfileRow name="Password:" value={profile.password} />
                <ProfileRow name="Age:" value={profile.age} />
                <ProfileRow name="Gender:" value={profile.sex} />
                <ProfileRow name="Role:" value={profile.role} />
            </div>

            <hr />

            <h2>My Prefered Genres</h2>
            {profile.preferedGenres.map(genre => <ProfileGenre key={genre.name + Math.random()} name={genre.name} rating={genre.rating} />)}

            <hr />

            <h2>My Rated Movies</h2>
            <div className="movies-list">
                {profile.ratedMovies.map(movie => <MovieCard key={`movie_${movie.id}`} movie={movie} />)}
            </div>
        </div>
    );
};

export default ProfilePage;