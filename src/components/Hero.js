import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Hero = () => {
	if (window.innerWidth <= 768) {
		const video = document.getElementById('video');
		video.removeAttribute('autoplay');
		console.log(video);
	}
	return (
		<div className='hero-container'>
			<video id='video' src='/videos/video-4.mp4' autoPlay loop muted />
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
