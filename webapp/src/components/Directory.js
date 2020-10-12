import React, { useState } from 'react'

const Directory = () => {
    const [route, setRoute] = useState('/') 

    return (
        <div>
            <img />
            <h1>{route}</h1> 
        </div>
    )
}

export default Directory