import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const NavContainer = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    z-index: 122;

    .dropdown{
        position: fixed;
        top: 0;
        right: 0;
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
    cursor: pointer;
`;

const Navigation2 = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return(
        <NavContainer>
            <ToggleSwitch onClick={() => setMenuToggle(!menuToggle)}
                title="Toggle menu" 
                animate={{rotate: menuToggle ? 180 : 0}}   
            >
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </ToggleSwitch>
            <motion.div className="dropdown" onMouseLeave={ ()=> setMenuToggle(!menuToggle) }
                initial={{x: 300}} 
                animate={{x: menuToggle ? 0 : 300}}
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