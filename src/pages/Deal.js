import React from 'react';

import { Counter } from '../components/Counter';

export const Deal = () => {
	return (
		<div className='main-screen'>
			<div className='deal-container'>
				<h1>
					Tenemos una oferta para ti! A partir de hoy los envíos de más de 50kg
					valen $85 !
				</h1>
				<Counter />
			</div>
		</div>
	);
};
