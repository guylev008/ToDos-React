import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fetchUser } from '../../state/users/operations';
import { fetchUserTasks } from '../../state/tasks/operations';
import { logoutUser } from '../../state/users/actions';
import { resetTasks } from '../../state/tasks/actions';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../../state/users/selectors';
import { userTasksLight } from '../../state/tasks/selectors';
import TodoPanel from './TodoPanel';
import appRoutes from '../../appRoutes';
import { getUserTokenFromCookie, removeUserTokenCookie } from '../../utils/authUtils';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const dispatch = useDispatch();
	const user = useSelector(userDetails);
	const tasks = useSelector(userTasksLight);

	const handleLogout = () => {
		removeUserTokenCookie();
		dispatch(logoutUser());
		dispatch(resetTasks());
	};

	useEffect(() => {
		async function fetchData() {
			if (!user.token) {
				const token = getUserTokenFromCookie();
				await dispatch(await fetchUser(token));
			}

			if (!tasks) {
				const token = getUserTokenFromCookie();
				await dispatch(await fetchUserTasks(token));
			}
		}
		fetchData();
	}, []);

	return (
		<Container>
			<TodoPanel tasks={tasks} name={user.name} />
			<Link onClick={() => handleLogout()} to={appRoutes.login}>
				Logout
			</Link>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export default HomePage;
