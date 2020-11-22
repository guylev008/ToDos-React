import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Task from './Task';

const TasksList = props => {
	return (
		<ItemsListContainer>
			{props.tasks && (
				<List>
					{props.tasks.map((item, index) => (
						<Task key={index} id={item.id} task={item} onCheck={props.checkItem} handleCheckboxChange={props.handleTaskStatus} />
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
