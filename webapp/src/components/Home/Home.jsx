import React from 'react';

import './style/home.css';

import home from './icons/home.svg';

const Home = ({ setRoute }) => {
	return (
		<div className="home-container">
			<img
				className="icon"
				onClick={() => {
					setRoute('/');
				}}
				src={home}
				alt={'home-button'}
			/>
		</div>
	);
};

export default Home;