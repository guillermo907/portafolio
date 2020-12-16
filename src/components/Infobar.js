import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import thumbUp from '../thumbUp.png';
import thumbUp2 from '../thumbUp2.png'; 
import timely from '../timely.png';

const InfobarContainer = styled.div`
    display: flex;
    flex-direction: column;
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
                <motion.div whileHover={{scale: 1.2}}>
                    <img style={{width: '45%'}} src={timely}/>
                    <h3>Agil </h3>
                    <p>Desarrollo agil y confiable</p>
                </motion.div>
                <motion.div whileHover={{y: 20}}>
                    <img style={{width: '55%'}} src={thumbUp}/>
                    <h3>Reponsivo</h3>
                    <p>Adaptable a cualquier tipo <br/> de dispositivo</p>
                </motion.div>
                <motion.div whileHover={{y: 20, scale: 1.2}}>
                    <img style={{width: '45%'}} src={thumbUp2}/>
                    <h3>Dinamico</h3>
                    <p>Diseños dinamicos</p>
                </motion.div>
            </div>
        </InfobarContainer>
    );
}

export default Infobar;