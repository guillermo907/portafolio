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
`;

const Navigation = () =>{
    const [menuToggle, setMenuToggle] = useState(false);
    const menuAnimation = useSpring({
        opacity: menuToggle ? 1 : 0,
        transform: menuToggle ? `translateX(0)` : `translateX(100%)`
    });

    return(
        <NavContainer>
            <ToggleSwitch onClick={() => setMenuToggle(!menuToggle)}>Menu</ToggleSwitch>
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