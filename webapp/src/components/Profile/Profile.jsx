import React from 'react';
import { useSelector } from 'react-redux';
import profilePicture from './images/profile.png';

import './style/profile.scss';

const Profile = () => {

    const user = useSelector((state) => state.user); 

    return(
        <div className="profile-container">
            <img
                className="profile-picture"
                src={profilePicture}
                alt="profile"
            />
            <p className="user-email">{user.email || 'you@anonymous.com'}</p>
            <h4 className="user-name">{user.name.display_name || 'Anonymous'}</h4>
        </div>
    );
};

export default Profile;