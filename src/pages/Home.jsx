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
          <p className='bio-info' id="first-p">I am a Software Engineer with experience at a startup in the Healthcare Industry. The various roles I have held at this startup have honed my skills as a collaborative and creative problem solver and have taught me the importance of versatility and adaptability. I have a bachelor's degree in software development, and I continue my learning through Scrimba’s front-end developer career path and building projects to level up my technical skills.</p>
          <p className='bio-info'>Outside of coding, I enjoy spending time with family and friends, whether it be playing games, listening to audiobooks, or being outdoors. I also enjoy comedy, coding, and true crime podcasts – all the things that keep me up at night.</p>
          <p className='bio-info'>I am exploring job opportunities where I can add significant value and foster continuous growth as a software engineer. If you have an exciting opportunity that aligns with my skills and experience, or if you just want to connect, please feel free to reach out to me.</p>  
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
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" className='icon-skills'/>  
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" className='icon-skills'/>
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