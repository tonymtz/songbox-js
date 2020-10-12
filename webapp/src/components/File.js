import React from 'react';

const File = ({ tag, name }) => {
    return(
        <div>
            <h6>{tag ? tag : '???'}</h6>
            <p>{name ? name : 'Unnamed file'}</p>
            <img src="" alt="heart-favorite"/>
        </div>
    ) 
}

export default File;