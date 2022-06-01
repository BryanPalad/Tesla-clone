import React from 'react'
import './models.css';
import SectionOne from './Sections/Section1/SectionOne';
import Sectiontwo from './Sections/Section2/Sectiontwo';
import Sectionthree from './Sections/Section3/Sectionthree';

function ModelS() {
  return (
  <div className='models-section'>
      <SectionOne/>
      <Sectiontwo/>
      <Sectionthree/>
  </div>
  )
}

export default ModelS