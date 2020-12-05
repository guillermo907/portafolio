import React from 'react';
import styled from 'styled-components';

const ProyectosContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-color);
    min-height: 70vh;
`;

const Proyectos = () =>{

    return(
        <ProyectosContainer>
            Algunos proyectos
        </ProyectosContainer>
    );
}

export default Proyectos;