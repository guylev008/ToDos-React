import React from 'react';
import BigTitle from '../common/BigTitle';
import InputText from '../common/InputText';
import Button from '../common/Button';
import styled from 'styled-components';

const Header = props => {
	return (
		<React.Fragment>
			<BigTitle titleText={`${props.name} Todo's`}></BigTitle>
			<Container>
				<InputText input={props.input} setInput={props.setInput} />
				<Button handleClick={props.addItem} text={'Add'} data={props.input} />
			</Container>
		</React.Fragment>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export default Header;
