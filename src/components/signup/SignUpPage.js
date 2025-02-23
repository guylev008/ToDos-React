import React from 'react';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';
import BigTitle from '../common/BigTitle';

const SignUpPage = () => {
	return (
		<Wrapper>
			<Container>
				<BigTitle titleText={'SignUp'}></BigTitle>
				<SignUpForm />
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	max-width: 600px;
	width: 100%;
	flex-shrink: 0;
`;

export default SignUpPage;
