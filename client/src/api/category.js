import axios from 'axios';

export const createCategory = async formData => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const response = await axios.post(
		`${process.env.REACT_APP_SERVER_URL}/api/category`,
		formData,
		config
	);

	return response;
};

export const getCategories = async () => {
	const response = await axios.get(
		`${process.env.REACT_APP_SERVER_URL}/api/category`
	);

	return response;
};
