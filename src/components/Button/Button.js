import React from 'react';

export const Button = ({
	children,
	type,
	buttonStyle,
	buttonSize,
	onClick,
}) => {
	return (
		<button
			className={`btn ${buttonStyle} ${buttonSize} pointer`}
			type={type}
			onClick={onClick}>
			{children}
		</button>
	);
};
