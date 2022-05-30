import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Section({title,description,linkTag,leftBtnText,rightBtnText,backgroundImg,id,onClick}) {
    
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <ItemText className={id}>
            <h1>{title}</h1>
            <p>{description}<a>{linkTag}</a></p>
        </ItemText>
        </Fade> 
        <Buttons>
        <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
            </LeftButton>
            { rightBtnText && 
            <RightButton>
                {rightBtnText}
            </RightButton>
            }
        </ButtonGroup>
        </Fade>
            <Link activeClass="active"
            to={onClick}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}>
            <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Link>
         </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div `
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    
`

const ItemText = styled.div `
    h1 {
        color: black;
        font-size: 40px;
        letter-spacing: 2px;
        margin-bottom: 7px;
    }
    color: white;
    padding-top: 15vh;
    text-align: center;
    z-index: -1;
    font-family: 'Rubik', sans-serif;

    a {
        text-decoration: underline;
        cursor: pointer;
    }
    a:hover {
        text-decoration-thickness: 2px;
    }
    
`

const ButtonGroup = styled.div `
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div `
    background-color: black;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    font-family: 'Rubik', sans-serif;
    justify-content: center;
    align-items:center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    font-family: 'Rubik', sans-serif;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    cursor: pointer;
`

const Buttons = styled.div`
    margin-bottom: 30px;
  `