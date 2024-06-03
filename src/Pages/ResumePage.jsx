import React from 'react';
import Summary from '../components/Summary';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';

const ResumePage = () => {
  return (
    <div>
      <Summary />
      <Education/>
      <Experience />
      <Skills />
    </div>
  )
}

export default ResumePage