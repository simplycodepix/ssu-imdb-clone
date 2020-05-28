const Rating = require('../models/Rating.model');

exports.add = async (req, res) => {
    let ratingBody = {
        movie_id: req.body.movie_id,
        user_id: req.body.user_id,
        rating: req.body.rating
    };

    if (!ratingBody.movie_id || !ratingBody.user_id) return res.json({ error: "Add rating fail" });

    Rating.addRating(ratingBody, ({ result }) => {
        res.send(result);
    });
};