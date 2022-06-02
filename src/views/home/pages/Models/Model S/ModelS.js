import React from 'react'
import './models.css';
import SectionOne from './Sections/Section1/SectionOne';
import Sectiontwo from './Sections/Section2/Sectiontwo';
import Sectionthree from './Sections/Section3/Sectionthree';
import Sectionfour from './Sections/Section4/Sectionfour';

function ModelS() {
  return (
  <div className='models-section'>
      <SectionOne/>
      <Sectiontwo/>
      <Sectionthree/>
      <Sectionfour/>
  </div>
  )
}

export default ModelS