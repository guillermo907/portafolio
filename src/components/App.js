import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Banner from './Banner';
import Infobar from './Infobar';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import Footer from './Footer';
import Navigation2 from './Navigation2';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0 auto;
    max-width: 100%;
    background-color: white;
  }
  html{
    scroll-behavior: smooth !important;
  }
  :root {
    --main-bg-color: red;
    --pink-color: rgba(244, 97, 193, 0.999);
    --blue-color: #3461c1;
    --blue-color2: #4579e2;
    --blue-dark-color: rgba(34, 50, 87, 0.976);
    --white-trans-color: rgba(255, 255, 255, 0.743); 

  }
`;
const Container = styled.div`
    // background: url('https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1762&q=80') no-repeat
    // center center/cover;
    background-color: #3461c1;
    color: white;
    min-height: 98vh;
    font-family: 'Poiret One', cursive;
`;

const App = () =>{

    return (
        <Container>
            <GlobalStyle />
            <Navigation2 />
            <Banner />
            <Infobar />
            <Contacto />
            <Proyectos />
            <Footer />
        </Container>
    );
}

export default App;
