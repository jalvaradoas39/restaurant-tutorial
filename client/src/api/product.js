import axios from 'axios';

export const createProduct = async data => {
	const response = await axios.post(
		`${process.env.REACT_APP_SERVER_URL}/api/product`,
		data
	);

	return response;
};
