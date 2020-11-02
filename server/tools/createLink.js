const createLink = async (dbx, route) => {
	const link = await dbx.sharingCreateSharedLink({ path: route });
	return link;
};

module.exports = createLink;