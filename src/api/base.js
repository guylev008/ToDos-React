  
import axios from 'axios';

const baseTodoApiRequest = () => {
	return axios.create({
		baseURL: 'http://localhost:3200/',
		timeout: 3000
	});
};

export default baseTodoApiRequest;