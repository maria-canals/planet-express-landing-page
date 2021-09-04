import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobileMenu = () => {
		setClick(false);
	};

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo'>
						<img src='/planet-express_logo.png' alt='planet-express-logo' />
					</Link>

					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link
								to='/ofertas'
								className='nav-links'
								onClick={closeMobileMenu}>
								<i className='far fa-star'></i>
								Oferta
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/servicios'
								className='nav-links'
								onClick={closeMobileMenu}>
								Calcula tu pedido
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/empleados'
								className='nav-links'
								onClick={closeMobileMenu}>
								Empleados
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/newsletter'
								className='nav-links'
								onClick={closeMobileMenu}>
								Newsletter
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
