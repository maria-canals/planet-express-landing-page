import React, { useEffect, useRef, useState } from 'react';

import Spinner from '../Spinner/Spinner';

export const Counter = () => {
	const [timerDays, setTimerDays] = useState('00');
	const [timerHours, setTimerHours] = useState('00');
	const [timerMinutes, setTimerMinutes] = useState('00');
	const [timerSeconds, setTimerSeconds] = useState('00');

	let interval = useRef();

	const startTimer = () => {
		const countDownDate = new Date('July 30 2022 00:00:00').getTime();
		let interval;

		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				clearInterval();
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval();
			setTimerDays('00');
			setTimerHours('00');
			setTimerMinutes('00');
			setTimerSeconds('00');
		};
	}, []);
	return (
		<>
			{timerSeconds === '00' ? (
				<Spinner />
			) : (
				<div className='counter-container'>
					<h2 className='counter-headline'>Tiempo restante:</h2>
					<ul>
						<li>
							<span className='days'>{timerDays}</span>días
						</li>
						<li>
							<span className='hours'>{timerHours}</span>Horas
						</li>
						<li>
							<span className='minutes'>{timerMinutes}</span>Minutos
						</li>
						<li>
							<span className='seconds'>{timerSeconds}</span>Segundos
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
