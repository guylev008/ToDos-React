import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setTaskStatus } from '../../state/tasks/actions';
import Task from './Task';

const TasksList = props => {
	const dispatch = useDispatch();

	const handleTaskStatus = (value, taskId) => {
		dispatch(setTaskStatus(taskId, value));
	};

	return (
		<ItemsListContainer>
			{props.tasks && (
				<List>
					{props.tasks.map((item, index) => (
						<Task key={index} id={item.id} task={item.description} onCheck={props.checkItem} handleCheckboxChange={handleTaskStatus} />
					))}
				</List>
			)}
		</ItemsListContainer>
	);
};

const ItemsListContainer = styled.div`
	margin: 50px 0 0 30px;
`;

const List = styled.ul``;

export default TasksList;
