import React from 'react';
import styled from 'styled-components';

const InfobarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-arround;
    min-height: 80vh;
    background-color: var(--blue-dark-color);
    color: white;
    border-radius: 0 0 130px 130px;

    div{
        padding: 50px;
        margin: 20px;
    }
`;

const Infobar = () => {
    return (
        <InfobarContainer id="infobar">
            <div>Javascript</div>
            <div>ReactJS</div>
            <div>Redux</div>
            <div>HTML5</div>
            <div>CSS</div>
            <div>ExpressJS</div>
            <div>NodeJS</div>
        </InfobarContainer>
    );
}

export default Infobar;