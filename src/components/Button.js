import React from 'react';

export const Button = ({ children, type, buttonStyle, buttonSize }) => {
	return (
		<button className={`btn ${buttonStyle} ${buttonSize} pointer`} type={type}>
			{children}
		</button>
	);
};
