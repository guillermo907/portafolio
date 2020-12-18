import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const NewsCardContainer = styled(motion.div)`
    background-color: var(--blue-dark-color);
    margin: 20px;
    padding: 10px;
    border-radius: 10px;

    &:nth-child(odd){
    background-color: rgba(255, 255, 255, 0.137); 
    }

    h2{
        color: var(--pink-color);
    }
    p{
        margin: 15px;
    }
`;

const Button = styled.button`
        background-color: rgba(34, 50, 87, 0.876);
        color: white;
        border-radius: 10px;
        padding: 8px 13px;
        border: solid 0.5px white;
        cursor: pointer;

        &:hover{
            background-color: var(--pink-color);
        }
        &:active , &:focus{
            background-color: black;
            outline: none;
            box-shadow: 1px 2px rgba(255, 255, 255, 0.137);
        }
`;

const NewsCard = (props) =>{
    const [readToggle, setReadToggle] = useState(false);

    return (
        <NewsCardContainer animate={{ scale: readToggle ?  1.05 : 1 }} transition={{ duration: 0.5 }}>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <img src={props.image} style={{ width: "30%", borderRadius: "10px"}} />
            <motion.p animate={{ y: readToggle ?  0 : -100 , opacity: readToggle ?  1 : 0 , minHeight: readToggle ? "auto" : "0vh"} } >
                {props.content}
            </motion.p>
            <Button onClick={()=> setReadToggle(!readToggle)}>Leer</Button>
        </NewsCardContainer>
    )
}

export default NewsCard;