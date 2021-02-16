import React from 'react';
import styled from 'styled-components';

import fbLogo from '../fbSqr.png';
import instaLogo from '../instSqr.png';
import twitterLogo from '../twitterSqr.png';

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 12vh;
    background-color: var(--pink-color);
    color: white;

    .social{
        display: flex;
        align-items:center;
        max-width: 15em;
        
        img{
            padding: 0px 5px;
            width: 13%;

            &:hover{
                cursor: pointer;
            }
        }
    }

    a{
        text-decoration: none;
        color: white;
    }

`;

const Footer = () => {
    return (
        <FooterContainer>
            <div className="social">
                <img src={fbLogo} />
                <img src={instaLogo} />
                <img src={twitterLogo} />
            </div>
            <a class="toTopBtn" href="#">
                Back to top ↑
            </a>
        </FooterContainer>
    );
}

export default Footer;