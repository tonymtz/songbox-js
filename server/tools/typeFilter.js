const typeFilter = (entries) => {
    const files = entries.filter((entry) => {
        const isFolder = entry['.tag'] === 'folder';
        const isValidFile = entry.name.match(/\.?(mp3|ogg|wav)/);

        return isFolder || isValidFile;
    });
    
    return files;
};

module.exports = typeFilter;