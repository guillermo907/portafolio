import React from 'react';
import styled from 'styled-components';

const ContactoContainer = styled.div`
    display: flex;
    background-color: var(--blue-color);
    align-items: center;
    justify-content: space-evenly;
    min-height: 60vh;
    width: 100%;
    border-radius:  200px 20px 0 0;

    a{
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }
    svg{
        margin-left: 10px;
    }
    svg:hover{
        cursor: pointer;
    }
    
`;

const Contacto = () =>{

    return (
        <ContactoContainer id="contacto">
            <h1>Contacto</h1>
            <div>
                Guillermo López <br/><br/>
                <a title="Escribir al correo"> comando9073@gmail.com 
                    <svg onClick={()=> window.open('mailto:test@example.com?subject=subject&body=body')} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                    </svg>
                </a> <br/>  <br/>
                <a href="tel:3312116601" title="Marcar al telefono"> 33126601 
                    <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-outbound-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">                                                   
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </a>      
            </div>
        </ContactoContainer>
    );
}

export default Contacto;


