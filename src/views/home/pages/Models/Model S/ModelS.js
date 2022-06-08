import React from 'react'
import SectionOne from './Sections/Section1/SectionOne';
import Sectiontwo from './Sections/Section2/Sectiontwo';
import Sectionthree from './Sections/Section3/Sectionthree';
import Sectionfour from './Sections/Section4/Sectionfour';
import Sectionfive from './Sections/Section5/Sectionfive';
import Sectionseven from './Sections/Section7/Sectionseven';
import Sectioneight from './Sections/Section8/Sectioneight';
import Sectionnine from './Sections/Section9/Sectionnine';
import Sectioneleven from './Sections/Section11/Sectioneleven';
import Sectiontwelve from './Sections/Section12/Sectiontwelve';
import Sectionfifteen from './Sections/Section15/Sectionfifteen';
import ScrollToTop from "react-scroll-to-top";
function ModelS() {
  return (
  <div className='models-section'>
      <SectionOne/>
      <Sectiontwo/>
      <Sectionthree/>
      <Sectionfour/>
      <Sectionfive/>
      <Sectionseven/>
      <Sectioneight/>
      <Sectionnine/>
      <Sectioneleven/>
      <Sectiontwelve/>
      <Sectionfifteen/>
      <ScrollToTop smooth/>
  </div>
  )
}

export default ModelS