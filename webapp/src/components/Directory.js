import React from 'react';

import Home from './Home';

const Directory = ({ route, setRoute }) => {

    return (
        <div>
            <Home 
                setRoute={setRoute}
            
            />
            <h4>{route}</h4>
        </div>
    );
}

export default Directory;