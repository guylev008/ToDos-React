import styled from 'styled-components';

export default styled.div`
	content: '';
	text-align: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	padding: 20px;
	padding-top: 10vh;
	width: 100%;
	font-family: "Architects Daughter", sans-serif;
	background-color: ${props => props.theme.colors.yellow};
	& h1 {
		font-weight: bold;
	}
	& div {
		font-size: 40px;
	}
`;