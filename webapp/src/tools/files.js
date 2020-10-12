import axios from 'axios'

const getFiles = (token) => {
    const tempFiles = [
        {
            id: 1,
            tag: 'folder',
            name: 'Memes',            
        },

        {
            id: 2,
            tag: 'file',
            name: 'Fiesta pagana.mp3',            
        },

        {
            id: 3,
            tag: 'file',
            name: 'Sasaheyo.mp3',            
        },

    ];

    return tempFiles
}

export default getFiles