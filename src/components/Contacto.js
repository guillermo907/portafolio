import React from 'react';
import styled from 'styled-components';

const ContactoContainer = styled.div`
    display: flex;
    background-color: var(--pink-color);
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    width: 100%;
    border-radius:  130px 130px 0 0;
    
`;

const Contacto = () =>{

    return (
        <ContactoContainer>
            Contact
        </ContactoContainer>
    );
}

export default Contacto;


