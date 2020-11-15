const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

router.post('/favorites', auth, (req, res) => {
    const file = req.body;

    const { account_id, email } = req;

    if (file['.tag'] === 'file'){
        res.status(201).json({ account_id, email });
    } else {
        res.status(204).json({});
    }
});

module.exports = router;