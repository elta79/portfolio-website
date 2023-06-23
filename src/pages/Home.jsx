import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='bird'>
        <div className='body'></div>
        <div className='feather1'></div>
        <div className='eye'>
          <div className='eyeball'></div>
        </div>
        <div className='beak'></div>
        <div className='feather2'>
          <div className='inner'></div>
        </div>
      </div>
      <div className='about'>
        <h2>Emily Arnold</h2>
        <div className='prompt'>
          <p>Software developer</p>
          <a href='https://www.linkedin.com/in/elta7679/' target='_blank'><LinkedInIcon /></a>
          <a href='https://github.com/elta79' target='_blank'><GitHubIcon /></a>
          <a href='mailto: elta7679@gmail.com'><EmailIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Frontend</h2>
            <span>ReactJS, JavaScript, HTML, CSS, BootStrap, PyQt5, Python, Django, Figma</span>
          </li>
          <li className='item'>
            <h2>Backend</h2>
            <span>NodeJS, MySQL, MongoDB, SQL, PostGres, Firebase</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Python, Java</span>
          </li>
        </ol>
        
      </div>
    </div>
  )
}

export default Home