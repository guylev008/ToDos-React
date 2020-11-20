import React from 'react';
import BigTitle from '../common/BigTitle';
import InputText from '../common/InputText';
import Button from '../common/Button';

const Header = props => {
	return (
		<React.Fragment>
			<BigTitle titleText={"Todo's"}></BigTitle>
			<InputText input={props.input} setInput={props.setInput} />
			<Button handleClick={props.addItem} text={'Add'} />
		</React.Fragment>
	);
};

export default Header;
