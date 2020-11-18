import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Task from './Task'

const TasksList = (props) => {
    const items = [{id: 1, task: 'Work'}];//useSelector(tasks);
    return (
        <ItemsListContainer>
            <List>
                {items.map((item, index) => (
                  <Task
                    key={index}
                    id={item.id}
                    task={item.task}
                    onCheck={props.checkItem}
                 />
                ))}
            </List>
        </ItemsListContainer>
    )
}

const ItemsListContainer = styled.div`
    margin: 50px 0 0 30px;
`

const List = styled.ul``

export default TasksList