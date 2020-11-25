const dropbox = require('dropbox');

const auth = async(req, res, next) => {
    try {
        const token = req.header('dbx-token');
        if (!token) throw new Error();

        const dbx = new dropbox.Dropbox({ accessToken: token });
        const userAccount = await dbx.usersGetCurrentAccount();

        const { account_id, email } = userAccount.result;
        if (!account_id || !email) throw new Error();

        req.account_id = account_id;
        req.email = email;
        req.token = token;

        next();
    } catch (error) {
        res.status(401).json({ error: 'Please authenticate!' });
    }
};

module.exports = auth;