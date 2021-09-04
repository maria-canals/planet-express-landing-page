import React, { useState } from 'react';

import { ServicesCalculator } from '../components/ServicesCalculator';

export const CalculateServices = () => {
	const initialState = [{ address: '', weight: '', price: 0 }];
	const [inputFields, setInputFields] = useState(initialState);

	const [price, setPrice] = useState(0);

	const handleChange = (i, { target }) => {
		let price = 0;

		if (target.value > 0 && target.value <= 19) {
			price = 10;
		} else if (target.value >= 20) {
			price = 20;
		}

		const values = [...inputFields];
		values[i][target.name] = target.value;
		values[i].price = price;
	};

	const handleAddPackage = () => {
		setInputFields([...inputFields, initialState]);
	};

	const handleDeletePackage = i => {
		const values = [...inputFields];
		if (values.length > 1) {
			values.splice(i, 1);
			setInputFields(values);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const result = inputFields.reduce((a, b) => +a + +b.price, 0);
		setPrice(result);
		console.log(inputFields);
	};

	return (
		<ServicesCalculator
			price={price}
			inputFields={inputFields}
			handleChange={handleChange}
			handleAddPackage={handleAddPackage}
			handleDeletePackage={handleDeletePackage}
			handleSubmit={handleSubmit}
		/>
	);
};
