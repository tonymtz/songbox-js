const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const { findUserByAccountId } = require('../models//users');
const { insertFavorite, getFavoritesFromUser, deleteFavoriteFromUser } = require('../models/favorites');

router.post('/favorite', auth, async(req, res) => {
    try {
        const file = req.body;
        const { account_id } = req;
        const user = await findUserByAccountId({ account_id });

        await insertFavorite({ user_id: user.user_id }, {
            song_name: file.name,
            path_lower: file.path_lower
        });
        res.status(201).json(file);
    } catch (error) {
        res.status(500).json({});
    }
});

router.get('/favorites', auth, async(req, res) => {
    try {
        const { account_id } = req;
        const { user_id } = await findUserByAccountId({ account_id });
        const favorites = await getFavoritesFromUser({ user_id });

        favorites.map((favorite) => {
            delete favorite.favorite_id;
            delete favorite.user_id;
        });

        res.status(200).json(favorites);

    } catch (error) {
        res.status(500).json({});
    }
});

router.delete('/favorite', auth, async(req, res) => {
    try {
        const file = req.query.file;
        const cleanFile = JSON.parse(file);

        const path_lower = cleanFile.path_lower;
        const song_name = cleanFile.name;
        const { account_id } = req;

        const { user_id } = await findUserByAccountId({ account_id });

        await deleteFavoriteFromUser({ user_id }, {
            path_lower,
            song_name
        });

        res.status(201).send({ message: 'File was removed from favorites!' });
    } catch (error) {
        res.status(500).json({ error: 'can not delete that file!' });
    }
});

module.exports = router;