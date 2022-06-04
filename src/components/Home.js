import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import ScrollToTop from "react-scroll-to-top";
import FooterComp from './Footer';
function Home() {
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
       <FooterComp/>
        <ScrollToTop smooth
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`

