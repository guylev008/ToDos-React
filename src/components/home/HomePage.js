import React from 'react';
import styled from 'styled-components'

const HomePage = () => {
    return (
    <Container>
        <TitleContainer>
            <Title>Header</Title>
        </TitleContainer>
    </Container>)
}

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    width: 60%;
    margin-top: 30px;
    background-color: ${props => props.theme.colors.orange};
    border-radius: 10px;
    border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
    padding: 0.2rem 1.2rem;
    color: ${props => props.theme.colors.darkGray};
`

const Container = styled.div`
    margin: 50px auto;
    padding: 16px;
    min-height: 580px;
    max-width: 300px;
    background-color: #f1f5f8;
    background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
    background-size: 40px 40px;
    border-radius: 20px;
    box-shadow: 4px 3px 7px 2px #00000040;
`

export default HomePage;