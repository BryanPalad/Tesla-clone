import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars,selectMenu } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    const menu = useSelector(selectMenu);
      return (
        <Container>
            <a href="/" rel="noreferrer">
         <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href={car.link} rel="noreferrer" style={{cursor: 'pointer'}}>
                    {car.carname}
                    </a>
                ))}
            </Menu>
            <RightMenu>
                <a href="/" rel="noreferrer">Shop</a>
                <a href="/" rel="noreferrer">Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                {menu && menu.map((menu, index) =>(
                <li key={index}><a href={menu.menulink} rel="noreferrer">{menu.menuname}</a></li>
            ))}
               
            </BurgerNav>
        </Container>
  )
}

export default Header

const Container = styled.div `
     min-height: 60px;
     position: ${window.location.pathname === '/' ? 'fixed' : 'absolute'};
     display:flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 20px;
     top: 0;
     left: 0;
     right: 0;
     z-index: 1;
     margin-left: 10px;
     overflow: hidden;
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 1rem;
    a {
        font-weight: 600;
        padding: 5px 10px;
        flex-wrap: nowrap;
        color: ${window.location.pathname === '/solarroofs' || window.location.pathname === '/model3' ? 'white' : 'rgb(76,79,83)'};
        font-family: 'Rubik', sans-serif;
        transition-delay: 0.1s;
    }
    a:hover {
        background-color: lightgray;
        border-radius: 40px;
    }
    @media (max-width: 768px){
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        color: ${window.location.pathname === '/solarroofs' || window.location.pathname === '/model3' ? 'white' : 'rgb(76,79,83)'};
        font-weight: 600;
        margin-right:10px;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        font-size: 15px;
        padding: 14px 0 14px 20px;
        cursor:pointer;
        transition-delay: 0.1s;
        a {
            font-weight: 600;
        } 
    }
    li:hover {
        background-color: lightgray;
        border-radius: 20px;
    }

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
    margin: 10px 0px 20px 0px;

`