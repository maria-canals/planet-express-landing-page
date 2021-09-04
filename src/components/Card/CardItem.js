import React from 'react';

export const CardItem = ({ name, url }) => {
	return (
		<div className='card' key={name}>
			<img src={url} alt={name} />
			<div className='card-container'>
				<h3>{name}</h3>
			</div>
		</div>
	);
};
