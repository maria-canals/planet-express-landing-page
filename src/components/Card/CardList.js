import React from 'react';
import { CardItem } from './CardItem';

export const CardList = ({ data }) => {
	return (
		<div className='cardList'>
			{data?.map(employee => (
				<CardItem
					key={employee.name}
					name={employee.name}
					url={employee.url}
					species={employee.species}
				/>
			))}
		</div>
	);
};
