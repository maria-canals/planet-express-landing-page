import { Button } from '../components/Button';

export const ServicesCalculator = ({
	handleChange,
	handleAddPackage,
	handleDeletePackage,
	handleSubmit,
	price,
	inputFields,
}) => {
	return (
		<div className='calculator-main'>
			<form onSubmit={handleSubmit}>
				{inputFields.map((element, i) => (
					<div key={i}>
						<h4>Paquete {i + 1}</h4>
						<div className='calculator-inputs'>
							<label>País de entrega:</label>
							<input
								type='text'
								name='address'
								required
								placeholder='Introduce país'
								value={inputFields.address}
								onChange={e => handleChange(i, e)}
							/>
							<label>Peso/kg:</label>
							<input
								type='number'
								name='weight'
								required
								placeholder='0 kg'
								value={inputFields.weight}
								onChange={e => handleChange(i, e)}
							/>

							<Button
								buttonSize='btn-medium'
								buttonStyle='btn-primary'
								type='button'
								onClick={() => handleDeletePackage(i)}>
								-
							</Button>
						</div>
					</div>
				))}

				<div className='calculator-btns'>
					<Button
						buttonSize='btn-medium'
						buttonStyle='btn-primary'
						onClick={handleAddPackage}>
						Añadir paquete
					</Button>

					<Button
						type='submit'
						buttonSize='btn-medium'
						buttonStyle='btn-primary'
						onClick={handleSubmit}>
						Calcular Precio
					</Button>
				</div>
			</form>
			<div className='calculator-price'>
				<h4>Precio: ${price}</h4>
				<p>
					Menos de 20kg : 10$ <br />
					20kg o más: 20$
				</p>
			</div>
		</div>
	);
};
