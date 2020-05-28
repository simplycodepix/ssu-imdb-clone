import React from 'react';

import './AddRatingForm.scss';
import Rating from '../Rating/Rating';

const AlreadyRated = ({ rating }) => (
    <div className="rating-form-rated">
        <div className="rating-form-rated-title">
            You already rated
        </div>
        <Rating value={rating} />
    </div>
);

export const AddRatingForm = ({ disabled = false, rating, onSubmit, onChange }) => (
    <div className="rating-form-wrap">
        <div className="rating-form-title">
            Add Your Rating:
        </div>
        {!disabled ? <form className="rating-form" onSubmit={onSubmit}>
            <select name="rating" id="rating" onChange={onChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>Submit</button>
        </form> : <AlreadyRated rating={rating} />}
    </div>
);

export default AddRatingForm;