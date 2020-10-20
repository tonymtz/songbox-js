const createLink = async (dbx, route) => {
	const link = await dbx.sharingGetFileMetadata({ file: route });
	return link;
};

module.exports = createLink;