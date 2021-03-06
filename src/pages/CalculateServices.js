import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { ServicesCalculator } from '../components/ServicesCalculator/ServicesCalculator';

export const CalculateServices = () => {
	const [inputFields, setInputFields] = useState([
		{ address: '', weight: '', price: 0 },
	]);

	const [price, setPrice] = useState('');

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
		setInputFields([...inputFields, { address: '', weight: '', price: 0 }]);
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

		const result = inputFields.reduce((a, b) => a + +b.price, 0);
		setPrice(result);

		if (result === 0) {
			Swal.fire({
				icon: 'error',
				text: 'Revise los campos vacíos',
			});
		} else {
			setPrice(result);
		}
	};

	return (
		<div className='main-screen'>
			<h1 className='calculator-title'>Calcule el precio de sus envíos!</h1>
			<div className='calculator-container'>
				<ServicesCalculator
					price={price}
					inputFields={inputFields}
					handleChange={handleChange}
					handleAddPackage={handleAddPackage}
					handleDeletePackage={handleDeletePackage}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
};
