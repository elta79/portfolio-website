import React from 'react'
import '../styles/Experience.css'
import { ExperienceList } from '../helpers/ExperienceList.jsx' 
import ExperienceItem from '../components/ExperienceItem.jsx'

function Experience() {


  return (
    <div className='container--experience'>
      
      <h1>Experience</h1>
      <h2 className='title--name'>Emily Arnold</h2>
      <h3>Front-End Developer</h3>
      
      <div className='education'>        
        <h4>B.Sc Software Development | 2021 | Hodges University, Naples, FL</h4>
      </div>

      <div className='container--employment'>
        <h4 className='title--employment'>Employment</h4>
        <ExperienceItem />       
      </div>      
    </div>
  )
}

export default Experience