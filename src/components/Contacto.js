import React from 'react';
import styled from 'styled-components';

const ContactoContainer = styled.div`
    display: flex;
    background-color: var(--blue-color);
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    width: 100%;
    border-radius:  200px 20px 0 0;
    
`;

const Contacto = () =>{

    return (
        <ContactoContainer id="contacto">
            Contact
        </ContactoContainer>
    );
}

export default Contacto;


