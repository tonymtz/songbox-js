const express = require('express')
const dropbox = require('dropbox')

const typeFilter = require('../tools/typeFilter');
const createLink = require('../tools/createLink');
const setToken = require('../middleware/setToken');

const router = express.Router()

router.get('/files/*', setToken, async (req, res) => {
	try {
		const token = req.token;
		const dbx = new dropbox.Dropbox({ accessToken: token });

		const baseUrl = '/files';
		const routePath = req.path;

		const dropboxPath = routePath.substring(baseUrl.length, routePath.length).replace(/%20/g, ' ');
		const finalPath = dropboxPath === '/' ? '' : dropboxPath;

		console.log('dropbox path=', finalPath)

		const dropboxFiles = await dbx.filesListFolder({ path: finalPath });
		const files = typeFilter(dropboxFiles.result.entries);

		res.status(200).json(files);
	} catch (error) {
		res.status(400).json({ error: 'Something went wrong!' });
	}
});

router.get('/file/*', setToken, (req, res) => {
	try {
		const token = req.token;
		const dbx = new dropbox.Dropbox({ accessToken: token });

		const baseUrl = '/file';
		const path = req.path;

		const dropboxPath = path.substring(baseUrl.length, path.length).replace(/%20/g, ' ')

		createLink(dbx, dropboxPath, '')
			.then((fileLink) => {
				res.status(200).json(fileLink);
			})
			.catch((error) => {
				res.status(400).json(error);
			});
	} catch (error) {
		res.status(400).json(error);
	}
});



module.exports = router;