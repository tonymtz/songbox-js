const dropbox = require('dropbox');

const auth = async(req, res, next) => {
    try {
        const bearerHeader = req.header('authorization');

        if (!bearerHeader) {
            throw "No Authorization header in request";
        }

        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        const dbx = new dropbox.Dropbox({ accessToken: bearerToken });
        const userAccount = await dbx.usersGetCurrentAccount();
        const { account_id, email } = userAccount.result;

        if (!account_id || !email) {
            throw "No user found";
        }

        req.account_id = account_id;
        req.email = email;
        req.token = bearerToken;

        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};

module.exports = auth;