import React, { useEffect } from 'react';
import { fetchUser } from '../../state/users/operations';
import { fetchUserTasks } from '../../state/tasks/operations';
import { logoutUser } from '../../state/users/actions';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../../state/users/selectors';
import { userTasksLight, userTasks } from '../../state/tasks/selectors';
import TodoPanel from './TodoPanel';
import Cookies from 'universal-cookie';
import appRoutes from '../../appRoutes';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const dispatch = useDispatch();
	const user = useSelector(userDetails);
	const tasks = useSelector(userTasksLight);

	const handleLogout = () => {
		const cookies = new Cookies();
		cookies.remove('userToken');
		dispatch(logoutUser());
	};

	useEffect(() => {
		async function fetchData() {
			let cookies = new Cookies();
			if (!user) {
				const token = cookies.get('userToken');
				await dispatch(await fetchUser(token));
			}

			if (!tasks) {
				const token = cookies.get('userToken');
				await dispatch(await fetchUserTasks(token));
			}
		}
		fetchData();
	}, []);

	return (
		<React.Fragment>
			<TodoPanel tasks={tasks} />
			<Link onClick={() => handleLogout()} to={appRoutes.login}>
				Logout
			</Link>
		</React.Fragment>
	);
};

export default HomePage;
