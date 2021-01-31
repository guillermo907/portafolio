import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const NavContainer = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    z-index: 122;

    .dropdown{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-arround;
        align-items: center;
        background-color: var(--pink-color);
        min-width: 215px;
        min-height: 100% !important;
        z-index: 10;
        padding: 10px;
        border-radius: 0px 0px 0px 20px ;

        a{
            padding: 15px;
            color: white;
            text-decoration: none;
        }
    }
`;
const ToggleSwitch = styled(motion.a)`
    z-index: 999;
    padding: 8px;
    color: white;
`;

const Navigation2 = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return(
        <NavContainer>
            <ToggleSwitch onClick={() => setMenuToggle(!menuToggle)} 
                animate={{rotate: menuToggle ? 180 : 0}}
                
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </ToggleSwitch>
            <motion.div className="dropdown" onMouseLeave={ ()=> setMenuToggle(!menuToggle) }
                initial={{x: -300}} 
                animate={{x: menuToggle ? 0 : -300}}
             >
                    <h1><a href="#">Home</a></h1>
                    <h2><a href="#">Nosotros</a></h2>
                    <h2><a href="#contacto">Contacto</a></h2>
                    <h2><a href="#infobar">Servicios</a></h2>
            </motion.div>
        </NavContainer>
    );
}

export default Navigation2;