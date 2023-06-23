import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList.jsx'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return(
          <ProjectItem 
            id={idx} 
            name={project.name} 
            image={project.image} 
            video={project.video} 
            notes={project.notes} 
            skills={project.skills}            
          />
          )
        })}
      </div>
    </div>
  )
}

export default Projects