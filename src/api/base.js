import axios from 'axios';
import { getUserTokenFromCookie } from '../utils/authUtils';

const baseTodoApiRequest = () => {
	const token = getUserTokenFromCookie();

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
