import axios from 'axios';
import Cookies from 'universal-cookie';

const baseTodoApiRequest = () => {
	const cookies = new Cookies();
	const token = cookies.get('userToken');

	return axios.create({
		baseURL: 'http://localhost:3200/',
		timeout: 3000,
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		}
	});
};

export default baseTodoApiRequest;
