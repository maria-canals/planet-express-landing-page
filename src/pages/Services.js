import React, { useState } from 'react';
import { Button } from '../components/Button';

export const Services = () => {
	const [inputFields, setInputFields] = useState([
		{ address: '', weight: '', price: 0 },
	]);

	const { address, weight } = inputFields;

	const [price, setPrice] = useState(0);

	const handleChange = (i, { target }) => {
		let price = 0;

		if (target.value > 0 && target.value < 20) {
			price = 20;
		} else if (target.value > 20 && target.value < 50) {
			price = 45.9;
		} else if (target.value > 51) {
			price = 90.5;
		}

		const values = [...inputFields];
		values[i][target.name] = target.value;
		values[i].price = price;
		setInputFields(values);
	};

	const handleAddPackage = () => {
		setInputFields([...inputFields, { address: '', weight: '', price: '' }]);
	};

	const handleDeletePackage = (i, e) => {
		const values = [...inputFields];
		if (values.length > 1) {
			values.splice(i, 1);
			setInputFields(values);
		}
	};

	const handleResetForm = () => {
		setInputFields([{ address: '', weight: '', price: 0 }]);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(inputFields);

		const result = inputFields.reduce((a, b) => +a + +b.price, 0);

		console.log(inputFields, 'antes del submit');

		setPrice(result);
	};

	return (
		<div className='main-screen'>
			<h1>Calcula el precio de tus envíos!</h1>
			<form onSubmit={handleSubmit}>
				<div className='services-container'>
					{inputFields.map((element, i) => (
						<div key={i}>
							<h4>Paquete {i + 1}</h4>
							<div className='services-inputs'>
								<label>País de entrega:</label>
								<input
									type='text'
									name='address'
									required
									value={address}
									onChange={e => handleChange(i, e)}
								/>
								<label>Peso:</label>
								<input
									type='number'
									name='weight'
									required
									value={weight}
									onChange={e => handleChange(i, e)}
								/>

								<Button
									buttonSize='btn-medium'
									buttonStyle='btn-primary'
									onClick={handleDeletePackage}>
									-
								</Button>
							</div>
						</div>
					))}

					<div className='services-btns'>
						<Button
							buttonSize='btn-medium'
							buttonStyle='btn-primary'
							onClick={handleAddPackage}>
							Añadir paquete
						</Button>

						<Button
							className='btn'
							buttonSize='btn-large'
							buttonStyle='btn-outline'
							type='submit'>
							Calcular Precio
						</Button>

						<Button
							className='btn'
							buttonSize='btn-large'
							buttonStyle='btn-outline'
							type='submit'
							onClick={handleResetForm}>
							Resetear
						</Button>
					</div>
				</div>
			</form>
			<div className='services-price'>Precio: ${price}</div>
		</div>
	);
};
