import React from 'react';
import Rating from '../Rating/Rating';

import './UserRating.scss'

export const UserRating = ({ user }) => (
    <div className="user-rating-wrap">
        <div className="user-rating-title">
            <div className="user-name">{user.firstName} {user.lastName}</div>
            rated:
        </div>
        <div className="user-rating">
            {user.rating && <Rating value={user.rating} />}
        </div>
    </div>
);

export default UserRating;