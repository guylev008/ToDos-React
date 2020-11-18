import baseTodoApiRequest from './base';

export const loginUser = (email, password) => async () => {
    const path = 'users/login';
    try {
        const response = await baseTodoApiRequest().post(
            path,
            {
                email,
                password
            }
		);
		return response.data;
    } catch (error) {
        throw new Error(error)
    }
}

export const signUpUser = async (name, email, password) => async () => {
    const path = 'users';
    try {
        const response = await baseTodoApiRequest().post(
            path,
            {
                name,
                email,
                password
            }
		);
		return response.data;
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
