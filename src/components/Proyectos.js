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
    background-color: var(--blue-dark-color);
    
    margin-left: 5px;
    border-radius:  160px 20px 20px 20px;
    min-height: 70vh;

    .projects{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        div{
            margin: 20px;
            padding: 10px;
        }
    }

    img {
        max-width: 288px;
        max-height: 183px;
        border-radius: 10px;
        margin: 10px;
        &:hover{
            filter: invert(90%);
            cursor: pointer;
        }
    }
`;

const Proyectos = () =>{

    return(
        <ProyectosContainer>
            <h1>Algunos proyectos</h1>
            <div style = {{maxWidth: "100%"}}>
                <div class="projects" style={{display: "none"}}>
                    <div>
                        <h2>Confianza Solidaria</h2>
                        <img src={csgImage}/>
                    </div>
                    <div>
                        <h2>ECIDEAS</h2>
                        <img src={ecideasImage}/>
                    </div>
                    <div>
                        <h2>Familias de Fe</h2>
                        <img src={famImage}/>
                    </div>
                    
                </div>
            </div>
        </ProyectosContainer>
    );
}

export default Proyectos;

