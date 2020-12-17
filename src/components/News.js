import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NewsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: var(--blue-color2);
    min-height: 40vh;
    max-width: 100%;
    padding: 10px;
    border-radius: 20px 20px 0 0;
    overflow: scroll;

    .historias{
        background-color: rgba(34, 50, 87, 0.376);
        border-radius: 20px;
        padding: 10px;
        margin: 5px;
    }
    .historias:nth-child(odd){
        background-color: rgba(255, 255, 255, 0.137); 
    }

`;

const Button = styled.button`
        background-color: var(--blue-dark-color);
        color: white;
        border-radius: 10px;
        padding: 8px 13px;
        border-style: none;
        
        &:hover{
            background-color: var(--pink-color);
        }
        &:active , &:focus{
            background-color: black;
            outline: none;
            box-shadow: 1px 2px rgba(255, 255, 255, 0.137);
        }
`;

const News = () =>{
    const [news, setNews] = useState([]);
    console.log(news);

    useEffect( ()=> getNews2(), [] );

    const getNews2 = async () =>{
        const response = await axios.get('http://newsapi.org/v2/top-headlines?country=mx&apiKey=f7d83460fc5c4ed59faa6f302eb45a2a');
        setNews(response.data.articles);
    }

    const renderNews = () =>{
        if (news.length > 1){
            return news.map((newsStory)=>{
                return (
                    <div  class="historias">
                        <motion.h2 animate= {{ fontSize: '30px', color: '#ff2994', y: -10 }} 
                        transition={{ duration: 0.8 }}>
                            {newsStory.author}</motion.h2>
                        <p>{newsStory.description}</p>
                        <Button>Mas</Button>
                    </div>
                );
            })
        }else{
            return <div>Loading....</div>
        }
    }

    return (
        <NewsContainer>
            {renderNews()}
        </NewsContainer>
    );
}

export default News;