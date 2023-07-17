import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Experience.css'
import { ExperienceList } from '../helpers/ExperienceList.jsx'

function Experience() {
  const { id } = useParams()
  const experience = ExperienceList[id]
  return (
    <div className='container--experience'>
      
      <h1>Experience</h1>
      <h2>Emily Arnold</h2>
      <h3>Front-end Developer</h3>
      
      <div className='education'>        
        <h4>B.Sc Software Development | 2021 | Hodges University, Naples, FL</h4>
      </div>

      <div className='container--employment'>
        <h4 className='title'>Employment</h4>
        <h4 className='employment'>Freelance Web Developer | Present</h4>
        <ul>
          <li>Designed and deployed a simple website for a small business, resulting in a 15% rise in customer engagement within the first month.</li>
          <li>Increased customer contact opportunities by implementing a user-friendly contact form using EmailJS, resulting in a 30% boost in inquiries received by email.</li>
        </ul>
        <h4 className='employment'>Financial Director/Office Manager | Family Birth Services, Inc | 2001-Present</h4>
        <ul>
          <li>Planned, developed, tested, deployed, and maintained several versions of the website (WordPress, Squarespace, HTML, CSS, Bootstrap, JavaScript).  </li>
          <li>Created organizational systems to improve efficiency in the office using free software, software we already owned, or creating small task programs, leading to an annual savings of a minimum of $15,000 by eliminating the need for additional hires and reducing software expenses.</li>
          <li>Designed a 3-table data collection and processing system for patient data statistics required by Agency for Healthcare Administration and the Florida Department of Health, resulting in a 50% increase in reporting efficiency.  (Microsoft 365-Access, SQL) </li>
          <li>Collaborated with the owner to create new services for the patients based on patient requirements, adding value to patient care, resulting in a 26% increase in revenue in two years.</li>
        </ul>
        <h4 className='employment'>Web Development Internship | Southwest Florida Regional Tech Partnership | 2017-2019</h4>
        <ul>
          <li>Maintained and updated the website with local tech jobs, resulting in a 60% increase in job postings, enabling job seekers access to more opportunities and improving their chances of employment.</li>
          <li>Attended job fairs to promote the product, leading to at least a 30% increase in product visibility.</li>
        </ul>
      </div>

        
        
      
    </div>
  )
}

export default Experience