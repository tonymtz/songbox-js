const pool = require('../db/db');

const insertFavorite = async({ user_id }, { song_name, path_lower }) => {
    try {
        const queryText = 'INSERT INTO favorites(user_id, song_name, path_lower) values($1, $2, $3)';
        const values = [user_id, song_name, path_lower];
        const res = await pool.query(queryText, values);

        const successful = res.rowCount >= 1;
        return successful;
    } catch (error) {
        if (error) {
            return false;
        }
    }
};

const getFavoritesFromUser = async({ user_id }) => {
    try {
        const queryText = 'SELECT * FROM favorites WHERE user_id = $1';
        const values = [user_id];
        const res = await pool.query(queryText, values);

        const songs = res.rows;
        return songs;
    } catch (error) {
        if (error) {
            return [];
        }
    }
};

const deleteFavoriteFromUser = async({ user_id }, { song_name, path_lower }) => {
    try {
        const queryText = 'DELETE FROM favorites WHERE user_id = $1 AND song_name = $2 AND path_lower = $3';
        const values = [user_id, song_name, path_lower];
        const res = await pool.query(queryText, values);

        const successful = res.rowCount >= 1;
        return successful;
    } catch (error) {
        if (error) {
            return false;
        }
    }
};

const deleteAllFavorites = async() => {
    try {
        const queryText = 'DELETE FROM favorites';
        const res = await pool.query(queryText);

        const successful = res.rowCount >= 1;
        return successful;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    insertFavorite,
    getFavoritesFromUser,
    deleteFavoriteFromUser,
    deleteAllFavorites
};