import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Experience.css'
import { ExperienceList } from '../helpers/ExperienceList.jsx'

function Experience() {
  const { id } = useParams()
  const experience = ExperienceList[id]
  return (
    <div className='container--experience'>
      
      <h1 >Experience</h1>
      <h2 className='title--name'>Emily Arnold</h2>
      <h3>Front-End Developer</h3>
      
      <div className='education'>        
        <h4>B.Sc Software Development | 2021 | Hodges University, Naples, FL</h4>
      </div>

      <div className='container--employment'>
        <h4 className='title--employment'>Employment</h4>
        <h4 className='employment'>Front-End Web Developer | Freelance | Aug 2023 - Present</h4>
        <ul>
          <li>Designed and deployed a website (NaplesPlacenta.com) for a maternal healthcare business. Focused on a consistent color scheme and visual elements to satisfy customer requirements. Tech stack: React, JavaScript, HTML, and CSS.</li>
          <li>Produced a 30% increase in client inquiries by deploying a user-friendly contact form using EmailJS.</li>
        </ul>
        <h4 className='employment'>Financial Director/IT Admin | Family Birth Services, Inc | Jan 2001-Present</h4>
        <ul>
          <li>Designed and implemented a 3-table data collection system for healthcare statistics in a HIPAA-compliant environment, boosting reporting efficiency by 50%. (MS Access, SQL)</li>
          <li>Developed online patient registration forms, slashing data entry by 90% and streamlining reporting processes.</li>
          <li>Planned, developed, and maintained multiple website iterations, utilizing WordPress, Squarespace, HTML, CSS, Bootstrap, and JavaScript.</li>
          <li>Implemented organizational systems, leveraging existing or free software and task automation, saving over $15K annually in hiring and software expenses.</li>
          <li>Collaborated with stakeholders to enhance patient services, resulting in a 26% revenue increase over 2 years.</li>
        </ul>
        <h4 className='employment'>Web Development Intern | Southwest Florida Regional Tech Partnership | Sept 2017- Aug 2019</h4>
        <ul>
          <li>Maintained and updated a job search website using WordPress and BlueHost, adding differentiated account login types and access, added a database backup for redundancy, and improved SEO which resulted in a 60% increase in job postings by businesses.</li>
          <li>Collaborated with a software engineer in a team and attended meetings to gather specifications and requirements.</li>
        </ul>
      </div>

        
        
      
    </div>
  )
}

export default Experience