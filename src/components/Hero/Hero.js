import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export const Hero = () => {
	return (
		<div className='hero-container'>
			<div className='hero-description'>
				<h1>Planet Express</h1>
				<h2>Servicio de envíos espaciales</h2>
				<div className='hero-btns'>
					<Link to='/servicios' className='btn-mobile'>
						<Button
							className='btn pointer'
							buttonStyle='btn-primary'
							buttonSize='btn-medium'>
							Ver precios
						</Button>
					</Link>

					<Link to='/newsletter' className='btn-mobile'>
						<Button
							className='btn pointer'
							buttonStyle='btn-outline'
							buttonSize='btn-medium'>
							Subscribirse
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};
