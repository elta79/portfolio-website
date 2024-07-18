import React from 'react'
import { useParams } from "react-router-dom"
import { ProjectList } from '../helpers/ProjectList.jsx'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/ProjectDisplay.css'
import ReactPlayer from 'react-player'

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id]
  
  return (
    <div className='project'>
      <div className='col-01'>        
        <h1 className='project-item'>{project.name}</h1>
        <div className='project-item-container' >
          <img className='project-item' src={project.image} />
          <a href={project.webLink} className='project-item'>Check it out here!</a>
        </div>
        
        <h1 className='project-item'><b>Skills:</b></h1>
        <div className='project-item'> 
          <p>{project.skills} </p>
          <a href={project.gitLink} target='_blank'><GitHubIcon /></a>
        </div>
      </div>
      <div className='col-02'>
        <div className='project-item'>
          <h1>Notes:</h1> 
          <div className='notes-container'>
            <p>{project.notes.objective}</p>
            <p>{project.notes.challenges}</p>
            <p>{project.notes.learned}</p>
          </div>
        </div>        
        <ReactPlayer 
          className='react-player'
          url={project.video} 
          width='100%'
          height='100%'
        />
      </div>
      
         
    </div>
  )
}

export default ProjectDisplay