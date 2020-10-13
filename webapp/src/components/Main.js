import React, { useState } from 'react'

import Directory from './Directory'
import Files from './Files';

const Main = () => {
    const [route, setRoute] = useState('/');

    return (
        <div className="App">
            <Directory route={route} setRoute={setRoute}/>
            <Files route={route} setRoute={setRoute}/>
        </div>
    )
}

export default Main