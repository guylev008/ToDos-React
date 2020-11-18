import baseTodoApiRequest from './base';

export const fetchTasks = (token) => async () => {
    const path = 'tasks';
    try {
        const response = await baseTodoApiRequest().get(
            path,
            {
                headers: {Authorization: 'Bearer' + token}
            }
		);
		return response.data;
    } catch (error) {
        throw new Error(error)
    }
}