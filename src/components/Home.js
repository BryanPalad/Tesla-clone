import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import ScrollToTop from "react-scroll-to-top";

function Home() {
    const date = new Date();
    const year = date.getFullYear();

    const footeritems = [`Tesla @ ${year}`, 'Privacy & Legal','Vehicle Recalls', 'Contact', 'Careers','News','Engage', 'Locations'];

  return (
    <Container>
        <Section 
            id="model3"
            title="Model 3"
            description="Order Online for "
            linkTag="Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            onClick='modely'
        />
        <Section 
            id="modely"
            title="Model Y"
            description="Order Online for "
            linkTag="Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            onClick='models'
        />
        <Section 
            id="models"
            title="Model S"
            description="Order Online for "
            linkTag="Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            onClick='modelx'
        />
        <Section
            id="modelx"
            title="Model X"
            description="Order Online for "
            linkTag="Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            onClick='solarpanels'
        />
        <Section
            id="solarpanels" 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn More"
            onClick='solarroofs'
        />
        <Section
            id="solarroofs" 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn More"
            onClick='accessories'
        />
        <Section 
            id="accessories"
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"
            rightBtnText=""
        />
        <Footer>    
            {footeritems.map((value, index) => {
                return <a style={{padding: '0px 10px', fontSize: '15px'}} key={index} href="" rel="noreferrer">{value}</a>;
            })}
        </Footer>
        <ScrollToTop smooth
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`

const Footer = styled.div`
    margin-top: -50px;
`