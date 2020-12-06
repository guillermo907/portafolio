import React from 'react';
import styled from 'styled-components';

import csgImage from '../csg.png';
import ecideasImage from '../ecideas.png';
import famImage from '../famdefe2.png';

const ProyectosContainer = styled.div`
padding: 30px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-color);
    min-height: 70vh;

    .projects{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        div{
            margin: 20px;
        }
    }

    img {
        max-width: 360px;
        max-height: 228px;
        border-radius: 10px;
        &:hover{
            filter: invert(90%);
            cursor: pointer;
        }
    }
`;

const Proyectos = () =>{

    return(
        <ProyectosContainer>
            Algunos proyectos
            <div style = {{maxWidth: "100%"}}>
                <div class="projects">
                    <div>
                        <h1>Confianza Solidaria</h1>
                        <img src={csgImage}/>
                    </div>
                    <div>
                        <h1>ECIDEAS</h1>
                        <img src={ecideasImage}/>
                    </div>
                    <div>
                        <h1>Familias de Fe</h1>
                        <img src={famImage}/>
                    </div>
                    
                </div>
            </div>
        </ProyectosContainer>
    );
}

export default Proyectos;