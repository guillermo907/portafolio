import React, { useState } from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

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
        background-color: #3461c1;
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
const ToggleSwitch = styled.a`
    z-index: 999;
    padding: 8px;
    color: var(--pink-color);
`;

const Navigation = () =>{
    const [menuToggle, setMenuToggle] = useState(false);
    const menuAnimation = useSpring({
        opacity: menuToggle ? 1 : 0,
        transform: menuToggle ? `translateX(0)` : `translateX(100%)`
    });

    return(
        <NavContainer>
            <ToggleSwitch onClick={() => setMenuToggle(!menuToggle)}>
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </ToggleSwitch>
            <animated.div style={menuAnimation} className="dropdown" onMouseLeave={ ()=> setMenuToggle(!menuToggle) } >
                {/* <Dropdown > */}
                    <h1><a href="#">Home</a></h1>
                    <h2><a href="#">Nosotros</a></h2>
                    <h2><a href="#contacto">Contacto</a></h2>
                    <h2><a href="#infobar">Servicios</a></h2>
                {/* </Dropdown> */}
            </animated.div>
        </NavContainer>
    );
}

export default Navigation;