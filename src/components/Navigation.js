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
        min-width: 245px;
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
            <ToggleSwitch onClick={() => setMenuToggle(!menuToggle)}>Toggle</ToggleSwitch>
            <animated.div style={menuAnimation} className="dropdown">
                {/* <Dropdown > */}
                    <a href="#">Home</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Contacto</a>
                    <a href="#">Nosotros</a>
                    <a href="#">{menuToggle === true ? "toggle on" : "toggle off"}</a>
                {/* </Dropdown> */}
            </animated.div>
        </NavContainer>
    );
}

export default Navigation;