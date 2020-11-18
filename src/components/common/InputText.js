import React from 'react';
import styled from 'styled-components'

const InputText = (props) => {
    return <Input
    type="text"
    value={props.input}
    onChange={(event) => {props.setInput(event.target.value)}}
/>
}

const Input = styled.input`
    border: 0;
    border-bottom: 3px dashed #fdcb6e;
    background-color: transparent;
    font-family: "Architects Daughter", sans-serif;
    font-size: ${props => props.theme.fontSizes.fonSize2};
    padding: 10px 15px;
    width: 70%;
    color: ${props => props.theme.colors.lightOrange};
`

export default InputText;