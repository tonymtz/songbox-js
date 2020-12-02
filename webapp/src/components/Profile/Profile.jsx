import React from 'react';
import { useSelector } from 'react-redux';
import profilePicture from './images/profile.png';

import './style/profile.scss';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  return (
    <div className="profile-container">
      <img
        className="profile-picture"
        src={user.photo || profilePicture}
        alt="profile"
      />
      <p className={`${darkThemeActive ? 'dark-theme-name' : ''} user-email`}>{user.email || 'you@anonymous.com'}</p>
      <h4 className="user-name">{user.name.display_name || 'Anonymous'}</h4>
    </div>
  );
};

export default Profile;
