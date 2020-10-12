import React, {useState, useEffect} from 'react';

import File from './File';

import auth from '../auth/auth'
import getFiles from '../tools/files'

const Files = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        if (auth()) {
            const files = getFiles()
            setFiles(files)
        }
    }, []);

    return(
        <div>
            {
                files.map((file) => {
                    return (
                        <File key={file.id} tag={file.tag} name={file.name} />
                    );
                })
            }
        </div>
    );
}

export default Files;