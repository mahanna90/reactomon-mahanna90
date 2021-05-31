import React from 'react';
import styled from 'styled-components';
import Pikachu from '../images/byebye.png';

const Image = styled.img`
    max-width: 350px;
`;

const Home = () => {
    return (
        <>
            <Image src={Pikachu} alt="pikachu" />
        </>
    )
}

export default Home;