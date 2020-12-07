import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 12vh;
    background-color: var(--pink-color);
    color: white;
`;

const Footer = () => {
    return (
        <FooterContainer>
            Footer
        </FooterContainer>
    );
}

export default Footer;