import React from 'react';
import styled from 'styled-components';

const InfobarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    background-color: var(--blue-dark-color);
    color: white;
`;

const Infobar = () => {
    return (
        <InfobarContainer>
            Infobar
        </InfobarContainer>
    );
}

export default Infobar;