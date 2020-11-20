import baseTodoApiRequest from './base';

export const loginUser = async (email, password) => {
	const path = 'users/login';
	debugger;
	try {
		const response = await baseTodoApiRequest().post(path, {
			email,
			password
		});
		return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export const signUpUser = async (name, email, password) => {
	const path = 'users';
	try {
		const response = await baseTodoApiRequest().post(path, {
			name,
			email,
			password
		});
		return response.data;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
