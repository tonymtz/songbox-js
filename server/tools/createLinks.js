const createLinks = (files, dbx, route) => {
    const filesWithLinks = files.map(async (file) => {
        if (file['.tag'] === 'file') {
            const fileRoute = route ? `${route}${`${file.name}`}` : `/${file.name}`
            file.link = await dbx.sharingGetFileMetadata({ file: fileRoute });
        }

        return file;
    });

    return filesWithLinks;
}

module.exports = createLinks;