import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NewsCard from './NewsCard';

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



const News = () =>{
    const [news, setNews] = useState([]);
    const [historyToggle, setHistoryToggle] = useState(false);
    console.log(news);

    useEffect( ()=> getNews2(), [] );

    const getNews2 = async () =>{
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=mx&apiKey=f7d83460fc5c4ed59faa6f302eb45a2a');
        setNews(response.data.articles);
    }

    const renderNews = () =>{
        if (news.length > 1){
            return news.map((newsStory)=>{
                return (
                    <NewsCard class="historias"
                    title={newsStory.title}
                    author={newsStory.author} 
                    description={newsStory.description}
                    content={newsStory.content}
                    image={newsStory.urlToImage}
                    />
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