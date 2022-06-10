import React from 'react'
import styled from "styled-components"

function FooterComp() {
    const date = new Date();
    const year = date.getFullYear();

    const footeritems = [`Tesla @ ${year}`, 'Privacy & Legal','Vehicle Recalls', 'Contact', 'Careers','News','Engage', 'Locations'];
  return (
    <Footer>    
            {footeritems.map((value, index) => {
                return <a style={{padding: '0px 10px', fontSize: '15px'}} key={index} href="" rel="noreferrer">{value}</a>;
            })}
    </Footer>
  )
}

export default FooterComp

const Footer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    margin-top: -50px;

    @media (max-width: 768px){
      flex-direction: column;
      gap: 1rem;
  } 
`
