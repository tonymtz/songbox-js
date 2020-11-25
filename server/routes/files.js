const express = require('express');
const dropbox = require('dropbox');

const typeFilter = require('../tools/typeFilter');
const createLink = require('../tools/createLink');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/files/*', auth, async(req, res) => {
    try {
        const token = req.token;
        const dbx = new dropbox.Dropbox({ accessToken: token });

        const baseUrl = '/files';
        const routePath = req.path;

        const dropboxPath = routePath.substring(baseUrl.length, routePath.length).replace(/%20/g, ' ');
        const finalPath = dropboxPath === '/' ? '' : decodeURI(dropboxPath);

        const dropboxFiles = await dbx.filesListFolder({ path: finalPath });

        const files = typeFilter(dropboxFiles.result.entries);

        const clearFiles = files.map((file) => {
            delete file.id;
            delete file.client_modified;
            delete file.server_modified;
            delete file.rev;
            delete file.size;
            delete file.is_downloadable;
            delete file.content_hash;

            return file;
        });

        res.status(200).json(clearFiles);
    } catch (error) {
        res.status(400).json({ error: 'Something went wrong!' });
    }
});

router.get('/file/*', auth, (req, res) => {
    try {
        const token = req.token;
        const dbx = new dropbox.Dropbox({ accessToken: token });

        const baseUrl = '/file';
        const path = req.path;

        const dropboxPath = path.substring(baseUrl.length, path.length);
        const decodedPath = decodeURI(dropboxPath);

        createLink(dbx, decodedPath, '')
            .then((file) => {
                const clearFile = {
                    url: file.result.url
                };

                if (file.status !== 200) {
                    res.status(404).json({});
                } else {
                    res.status(200).json(clearFile);
                }
            })
            .catch((error) => {
                res.status(400).json(error);
            });

    } catch (error) {
        res.status(400).json(error);
    }
});



module.exports = router;