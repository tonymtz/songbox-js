const createLink = async (dbx, route, fileName) => {
    const link = await dbx.sharingGetFileMetadata({ file: route });
    return link
}

module.exports = createLink;