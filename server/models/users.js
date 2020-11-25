const pool = require('../db/db');

const insertUser = async ({ account_id, email }) => {
    try {
        const user = await findUserByAccountId({ account_id });

        if (!user) {
            const queryText = 'INSERT INTO users(account_id, email) VALUES($1, $2)';
            const values = [account_id, email];
            const res = await pool.query(queryText, values);

            const successful = res.rowCount >= 1;
            return successful;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
};

const findUserByAccountId = async ({ account_id }) => {
    try {
        const queryText = 'SELECT * FROM users WHERE account_id = $1';
        const values = [account_id];
        const res = await pool.query(queryText, values);

        const user = res.rows[0];
        return user;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    insertUser,
    findUserByAccountId
};