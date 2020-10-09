const express = require('express')
const dropbox = require('dropbox')

const typeFilter = require('../tools/typeFilter')
const setToken = require('../middleware/setToken')

const router = express.Router()

router.get('/files', setToken, async (req, res) => {
	try {
		const token = req.token
		const dbx = new dropbox.Dropbox({ accessToken: token })

		const dropboxFiles = await dbx.filesListFolder({ path: '' })
		const files = typeFilter(dropboxFiles.result.entries)

		res.status(200).json(files)
	} catch (error) {
		res.status(400).json({ error: 'Something went wrong!' })
	}
})

router.get('/files/*', setToken, async (req, res) => {
	try {
		const token = req.token
		const dbx = new dropbox.Dropbox({ accessToken: token })

		const baseUrl = '/files'
		const routePath = req.path

		const dropboxPath = routePath.substring(baseUrl.length, routePath.length).replace(/%20/g, ' ')
		console.log('final path=', dropboxPath)

		const dropboxFiles = await dbx.filesListFolder({ path: dropboxPath })
		const files = typeFilter(dropboxFiles.result.entries)

		res.status(200).json(files)
	} catch (error) {
		res.status(400).json({ error: 'Something went wrong!' })
	}
})

module.exports = router