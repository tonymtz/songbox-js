import React from 'react';

import home from '../../images/1x/sharp_home_black_24dp.png';

const Home = ({ setRoute }) => {
    return (
        <div>
            <img
                onClick={() => {
                    setRoute('/')
                }}
                src={home}
                alt={'home-button'}
            />
        </div>
    );
}

export default Home;