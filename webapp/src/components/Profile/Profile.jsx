import React from 'react';

import profilePicture from './images/profile.png';

import './style/profile.scss';

const Profile = () => {
	return(
		<div className="profile-container">
			<img
				className="profile-picture"
				src={profilePicture}
				alt="profile"
			/>
			<p className="user-email">example@something.com</p>
			<h4 className="user-name">Ariel Plascencia Bojorquez</h4>
		</div>
	);
};

export default Profile;