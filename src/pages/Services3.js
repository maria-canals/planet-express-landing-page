import { useState } from 'react';
import { Button } from '../components/Button';

export const Services = () => {
	const [weight, setWeight] = useState({
		weight1: {
			value: '',
			price: 0,
		},
		weight2: {
			value: '',
			price: 0,
		},
	});

	const { weight1, weight2 } = weight;
	const [totalPrice, setTotalPrice] = useState();

	const handleInputChange = ({ target }) => {
		let price = 0;

		if (target.value > 0 && target.value < 20) {
			price = 20;
		} else if (target.value > 20 && target.value < 50) {
			price = 45.9;
		} else if (target.value > 51) {
			price = 90.5;
		}

		setWeight({
			...weight,
			[target.name]: {
				value: target.value,
				price,
			},
		});
	};

	const calculateHandler = e => {
		console.log(weight);
		e.preventDefault();
		const totalPrice = Object.values(weight).reduce(
			(a, b) => a.price + b.price
		);

		setTotalPrice(totalPrice);
	};
	return (
		<div className='main-screen'>
			<form onSubmit={calculateHandler}>
				<div className='services-container'>
					<h2>
						Calcula tu pedido <i className='fas fa-rocket'></i>
					</h2>
					<div className='services-taxes'>
						<ul>
							<li>
								<b>PRECIOS</b>
							</li>
							<li>
								Menos de 20kg: <span>20$</span>
							</li>
							<li>
								Entre 20kg y 50kg: <span>45.90$</span>
							</li>
							<li>
								Más de 50kg: <span>90.50$</span>
							</li>
						</ul>
					</div>

					<fieldset>
						<legend>
							Introduce el peso de cada paquete que quieras enviar, con un
							máximo de 2 paquetes.
						</legend>
						<label htmlFor='weight1'></label>
						<input
							type='number'
							min='0'
							placeholder='Introduce el peso del paquete en kg'
							name='weight1'
							value={weight1.value}
							onChange={handleInputChange}
						/>
						<label htmlFor='weight2'></label>
						<input
							type='number'
							min='0'
							placeholder='Introduce el peso del paquete en kg'
							name='weight2'
							value={weight2.value}
							onChange={handleInputChange}
						/>
					</fieldset>

					<span className='services-price'>
						{totalPrice > 0 && <b> Precio: ${totalPrice}</b>}
					</span>

					<Button
						className='btn'
						buttonStyle={'btn-outline'}
						buttonSize='btn-large'
						type='submit'>
						Calcula el precio
					</Button>
				</div>
			</form>
		</div>
	);
};
