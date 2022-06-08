import React from 'react'
import Sectionone from './Sections/Section1/Sectionone'
import Sectiontwo from './Sections/Section2/Sectiontwo'
import Sectionthree from './Sections/Section3/Sectionthree'
import Sectionfour from './Sections/Section4/Sectionfour'
import Sectionfive from './Sections/Section5/Sectionfive'
import Sectionsix from './Sections/Section6/Sectionsix'
import Sectionseven from './Sections/Section7/Sectionseven'
import Sectionnine from './Sections/Section9/Sectionnine'
import ScrollToTop from "react-scroll-to-top";
function Model3() {
  return (
    <div>
        <Sectionone/>
        <Sectiontwo/>
        <Sectionthree/>
        <Sectionfour/>
        <Sectionfive/>
        <Sectionsix/>
        <Sectionseven/>
        <Sectionnine/>
        <ScrollToTop smooth/>
    </div>
  )
}

export default Model3