import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href='https://www.linkedin.com/in/elta7679/' target='_blank'><LinkedInIcon /></a>
          <a href='https://github.com/elta79' target='_blank'><GitHubIcon /></a>
          <a href='mailto: elta7679@gmail.com'><EmailIcon /></a> 
        </div>
        <p> &copy; {currentYear} emilyarnold</p>
    </div>
  )
}

export default Footer