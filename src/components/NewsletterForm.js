import { Button } from '../components/Button';

export const NewsletterForm = ({
	handleInputChange,
	handleNewsletter,
	email,
}) => {
	return (
		<form onSubmit={handleNewsletter}>
			<label htmlFor='email'></label>
			<input
				type='email'
				id='email'
				name='email'
				placeholder='Introduce tu email...'
				required
				value={email}
				onChange={e => handleInputChange(e.target.value)}
			/>

			<Button className='btn' buttonStyle='btn-outline' buttonSize='btn-medium'>
				Subscribirse
			</Button>
		</form>
	);
};
