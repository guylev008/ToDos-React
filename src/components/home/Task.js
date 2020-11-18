import React from 'react';
import styled from 'styled-components'

const Task = ({id, task, onCheck}) => {
return <Item onClick={() => {onCheck(id)}}>{task}</Item>
}

const Item = styled.li`
    text-align: left;   
    margin: 20px 10px;
    font-size: ${props => props.theme.fontSizes.fontSize0};
    font-weight: 300;
    color: ${props => props.theme.colors.lightBlack};
`

export default Task;