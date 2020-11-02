const createLink = async (dbx, route) => {
	const link = await dbx.filesGetTemporaryLink({ path: route });
	return link;
};

module.exports = createLink;