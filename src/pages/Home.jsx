import React, { useRef } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/Home.css'
import emailjs from '@emailjs/browser'


// ************ Form Functions ************

function Home() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('contact_service', 'contact_form_emily', form.current, 'Ksv0B-69iF1uQVgg1')
      .then((result)=> {
        alert("Message sent successfully...")
        console.log('Success')
      },
      (error)=> {
        console.log('Error')
      }
    )
    form.current.reset()
  }
  // ***********************

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
      <div className='intro'>
        <h2>Emily Arnold</h2>
        <div className='prompt'>
          
          <p>software developer</p>
          <a href='https://www.linkedin.com/in/elta7679/' target='_blank'><LinkedInIcon /></a>
          <a href='https://github.com/elta79' target='_blank'><GitHubIcon /></a>
          <a href='mailto: elta7679@gmail.com'><EmailIcon /></a>
        </div>
        
      </div>
      <div className='about-container'>
        <div className='bio-container'>
        
          <h2>Bio</h2>
          <img src='/images/headshot.png' id='img-headshot'></img>
          <p className='bio-info' id="first-p">I am a versatile software engineer with a degree in CS and a strong professional foundation in Operations, IT administration, and website design with a specialization in front-end development. </p>
          <p className='bio-info'>Through my 15+ years of experience in various industries, including healthcare and workforce development, I have developed strong problem-solving skills and adaptability. I excel in innovating software features, optimizing data collection processes, and creating intuitive user experiences. I am proficient in React, JavaScript, HTML, and CSS, and passionate about continuous learning and growth. I have continued to expand my skillset beyond my B.S. through web development courses and projects, as well as freelance website design. I am looking to contribute to a team working on impactful projects in digital health companies, to drive meaningful value for patients and customers. </p>
          <p className='bio-info'>In my free time, I enjoy playing games, listening to podcasts/audiobooks, and spending time outdoors with family.</p>
          <p className='bio-info'>Let's connect and explore opportunities to collaborate!</p>  
        </div>
        <div className='skills-container'>
          <h2>Skills</h2>
          <div className='icons-container'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" className='icon-skills'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" className='icon-skills' />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"className='icon-skills' />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" className='icon-skills'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className='icon-skills'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" className='icon-skills'/>
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" className='icon-skills'/> */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"className='icon-skills'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" className='icon-skills'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" className='icon-skills'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"className='icon-skills'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" className='icon-skills'/>              
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" className='icon-skills'/> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className='icon-skills'/>
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" className='icon-skills'/>              
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className='icon-skills'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" className='icon-skills'/> */}
          </div>
      </div>
      
        

      </div>
      <div className='contact-container'>
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>           
          <input 
            type="text" 
            className="name" 
            name='name'
            id="name" 
            placeholder="Name"
            required
          />
          <input 
            type="email" 
            className="email" 
            name='name'
            id="email" 
            placeholder="Email"
            required
          />
          <textarea 
            className="message" 
            name='message'
            id="message" 
            placeholder="Message"
            required
          ></textarea>
          <button>Submit</button>
            
        </form>
      </div>
    </div>
  )
}

export default Home