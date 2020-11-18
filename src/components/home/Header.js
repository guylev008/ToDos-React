import React from 'react';
import BigTitle from '../common/BigTitle'
import InputText from '../common/InputText'
import Button from '../common/Button'

const Header = (props) =>{
    return (
        <React.Fragment>
            <BigTitle titleText={'Header'}></BigTitle>
            <InputText input={props.input} setInput={props.setInput}/>
            <Button addItem={props.addItem} text={'Button'}/>
        </React.Fragment>
    )
}

export default Header;