import React from 'react';
import styled from 'styled-components';
import WavesDivider from './WavesDivider';

const BannerCont = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.914);
    background: linear-gradient(to right, #fc5c7d, #6a82fb); 
    background: linear-gradient(to left, var(--blue-color2), var(--pink-color)); 
    color: white;
    min-height: 80vh;

    h1{
        font-size: 80px;
        padding-left: 10px;
    }
`;

const Banner = () => {

    return(
        <BannerCont>
            <h1>Desarrollo Web</h1>
            <h2>Guillermo López</h2>
            <WavesDivider />
        </BannerCont>
    );
}

export default Banner;