import React, { useState } from 'react';

import Swal from 'sweetalert2';
import { NewsletterForm } from '../components/NewsletterForm';

export const Newsletter = () => {
	const [email, setEmail] = useState('');

	const handleInputChange = value => {
		setEmail(value);
	};

	const handleNewsletter = e => {
		e.preventDefault();
		setEmail(email);
		Swal.fire({
			icon: 'success',
			text: `Subscrito correctamente! ${email}`,
		});

		setEmail('');
	};

	return (
		<div className='main-screen'>
			<div className='newsletter-container'>
				<h1>Únete a la aventura!</h1>
				<NewsletterForm
					email={email}
					handleInputChange={handleInputChange}
					handleNewsletter={handleNewsletter}
				/>
			</div>
		</div>
	);
};
