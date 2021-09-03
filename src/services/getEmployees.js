const axios = require('axios');

export const getEmployees = async employee =>
	await axios
		.get(
			`https://futuramaapi.herokuapp.com/api/v2/characters?search=${employee}`
		)
		.then(response => {
			const employeeData = {
				name: response.data[0].Name,
				url: response.data[0].PicUrl,
			};
			return employeeData;
		})
		.catch(err => {
			console.log(err);
		});
