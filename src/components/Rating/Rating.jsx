import React from 'react';

import './Rating.scss';

export const Rating = ({ value }) => (
    <div className="rating" >
        <div className="rating-content">
            <span className="mdi mdi-star-outline"></span>
            <span className="mdi mdi-star-outline"></span>
            <span className="mdi mdi-star-outline"></span>
            <span className="mdi mdi-star-outline"></span>
            <span className="mdi mdi-star-outline"></span>
            <div className="rating-inner" style={{ width: value / 5 * 100 + '%' }}>
                <span className="mdi mdi-star"></span>
                <span className="mdi mdi-star"></span>
                <span className="mdi mdi-star"></span>
                <span className="mdi mdi-star"></span>
                <span className="mdi mdi-star"></span>
            </div>
        </div>
        <div className="rating-number">
            ({value})
        </div>
    </div>
);

export default Rating;