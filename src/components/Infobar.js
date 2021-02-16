import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import responsiveImg from '../responsive.png';

const InfobarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    max-width: 100%;
    background-color: var(--blue-dark-color);
    color: white;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
    padding: 60px 0px;

    div{
        padding: 0px 20px;
        margin: 20px 0px;
    }

    .infoRow{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;

        div{
            max-width: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img{
            filter: invert(70%);
        }
        
    }
`;

const Infobar = () => {
    const [hovered, hoverToggle] = useState(false);

    return (
        <InfobarContainer id="infobar">
            <div className="infoRow">
                <motion.div whileHover={{y: 20, scale: 1.02}} whileTap={{ scale: 0.97 }}>
                    <img style={{width: '200%'}} src={responsiveImg}/>
                </motion.div>
            </div>
            <div className="Frase">
                <h2>Tu negocio necesita destacarse y una forma efectiva de hacerlo es teniendo una prescencia en la web</h2>
                <h2>Nosotros podemos ayudarte a hacerlo realidad sea cual sea tu necesidad</h2>
            </div>
        </InfobarContainer>
    );
}

export default Infobar;