import React, { useEffect, useState } from 'react';

import { CardList } from '../components/CardList';
import Spinner from '../components/Spinner';
import { getEmployees } from '../services/getEmployees';

import { employeesData } from '../data/data';

export const Employees = () => {
	const [employeesList, setEmployeesList] = useState([]);

	useEffect(() => {
		let result = [];

		employeesData.forEach(employee => {
			getEmployees(employee).then(employee => {
				result.push(employee);
				if (result.length === employeesData.length) {
					setEmployeesList(result);
				}
			});
		});

		return () => {
			setEmployeesList([]);
		};
	}, []);

	return (
		<>
			{employeesList.length > 0 ? (
				<div className='employees-screen'>
					<h1>Nuestros Empleados</h1>

					<CardList data={employeesList} />
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};
